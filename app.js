/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { PORT, SERVERADRESS, mongoConfig } = require('./constants/config');

const users = require('./controllers/users');
const cards = require('./controllers/cards');
const auth = require('./middlewares/auth');

const app = express();

mongoose.connect(`mongodb://${SERVERADRESS}:27017/mestodb`, mongoConfig)
  .then(() => console.log('mongoose is running'))
  .catch((err) => console.log(err.message));

// CORS middleware applying
const whitelist = [
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://konovaly4.github.io/mesto-frontend.github.io/',
  'http://my-mesto.gq',
  'https://my-mesto.gq',
];
const corsOptions = {
  credentials: true,
  origin: whitelist,
};
app.options('*', cors(corsOptions), (req, res) => {
  res.status(200).send('OK');
});
app.use(cors(corsOptions));

// other app use
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signin', users.login);
app.post('/signup', users.addUser);
app.get('/cards', cards.getCards);
app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.use('/', require('./routes/otherReq'));

app.listen(PORT);
console.log(PORT);
