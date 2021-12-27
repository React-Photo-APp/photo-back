const mongoose = require('mongoose');

const { Schema } = mongoose;

const pictureSchema = new Schema({
  message: String,
  date: { type: Date, default: Date.now },
  image: { name: String, url: String },
  author: String
});

module.exports = mongoose.model('Picture', pictureSchema);
