const mongoose = require('mongoose');

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
    match: [/^https?:\/\/(www\.)?(((\d{1,3}\.){3}\d{1,3}(?!\d))|([A-Za-z0-9]+(\.[A-Za-z0-9]+)?\.[a-z]{2,3}))(:\d{2,5}(?!\d))?([A-Za-z0-9/]+#?$)?/, 'avatar link is not valid'],
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
