const mongoose = require('mongoose');

const { Schema } = mongoose;

const pictureSchema = new Schema({
  message: String,
  date: { type: Date, default: Date.now },
  image: String,
  author: String
});

module.exports = mongoose.model('Picture', pictureSchema);
