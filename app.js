/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const PORT = require('./config');

const users = require('./controllers/users');
const auth = require('./middlewares/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log('mongoose is running'))
  .catch((err) => console.log(err.message));

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signin', celebrate({
  body: Joi.object.keys({
    email: Joi.string().required().uri(),
    password: Joi.string().required().min(5),
  }),
}),
users.login);
app.post('/signup', celebrate({
  body: Joi.object.keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
    avatar: Joi.string().required().uri(),
    email: Joi.string().required().uri(),
    password: Joi.string().required().min(5),
  }),
}),
users.addUser);

app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.use('/', require('./routes/otherReq'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode)
    .send({
      message: err.message,
    });
});

app.listen(PORT);
