/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const PORT = require('./config');

const users = require('./controllers/users');
const auth = require('./middlewares/auth');

const app = express();

// mongoose connection
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log('mongoose is running'))
  .catch((err) => console.log(err.message));

// app additional middlewares usage
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// request logger
app.use(requestLogger);

// temporary crash-test middleware
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// request signup/signin routing
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  }),
}),
users.login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
    avatar: Joi.string().required().uri(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  }),
}),
users.addUser);

// users/cards/other requests routing
app.use('/users', celebrate({
  cookies: Joi.object().keys({
    jwt: Joi.string().required(),
  }),
}),
auth, require('./routes/users'));

app.use('/cards', celebrate({
  cookies: Joi.object().keys({
    jwt: Joi.string().required(),
  }),
}),
auth, require('./routes/cards'));

app.use('/', require('./routes/otherReq'));

// error logger
app.use(errorLogger);

// error middlewares
// Joi error middleware
app.use(errors());

// final error middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode)
    .send({
      message: err.message,
    });
});

// port listening
app.listen(PORT);
