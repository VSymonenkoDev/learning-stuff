const mongoose = require('mongoose');

let Card = mongoose.model('Card', {
  question: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  creationDate: {
    type: Number,
    default: null
  }
});

module.exports = {Card};
