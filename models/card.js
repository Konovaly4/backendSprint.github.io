const mongoose = require('mongoose');
const checkValidity = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (v) => checkValidity.matches(v, /[a-zа-яё0-9\s]+/gi),
      message: 'card name is not valid',
    },
    minlength: 2,
    maxlength: 30,
    required: [true, 'card name required'],
  },
  link: {
    type: String,
    validate: {
      validator: (v) => checkValidity.isURL(v),
      message: 'Card URL is not valid',
    },
    required: [true, 'card link required'],
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
