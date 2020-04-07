const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = require('./config');

const users = require('./controllers/users');
const auth = require('./middlewares/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log('connet to database'))
  .catch((err) => console.log(err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '5e8317f409b9e753d448cdf0',
  };
  next();
});
app.post('/signin', users.login);
app.post('/signup', users.addUser);
app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.listen(PORT);
