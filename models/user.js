const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const checkValidity = require('validator');
const UnauthorizedErr = require('../errors/unauthorizedErr');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    match: [/[a-zа-яё0-9]+/gi, '"user name" is not valid'],
    minlength: 2,
    maxlength: 30,
    required: [true, 'name required'],
  },
  about: {
    type: String,
    match: [/[a-zа-яё0-9]+/gi, '"user about"  is not valid'],
    minlength: 2,
    maxlength: 30,
    required: [true, 'about info required'],
  },
  avatar: {
    type: String,
    required: [true, 'avatar link required'],
    validate: {
      validator: (v) => checkValidity.isURL(v),
      message: 'link format is incorrect',
    },
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email required'],
    validate: {
      validator: (v) => checkValidity.isEmail(v),
      message: 'email format is incorrect',
    },
  },
  password: {
    type: String,
    required: [true, 'password required'],
    minlength: 5,
    select: false,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByData = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedErr('Wrong email or password'));
      }
      return bcrypt.compare(password, user.password)
        .then((match) => {
          if (!match) {
            return Promise.reject(new UnauthorizedErr('Wrong email or password'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
