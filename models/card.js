const mongoose = require('mongoose');
const checkValidity = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    match: [/[a-zа-яё0-9]+/gi, '"card name" is not valid'],
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator: (v) => checkValidity.isURL(v),
      message: 'Card URL is not valid',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
