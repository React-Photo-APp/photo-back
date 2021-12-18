const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnect = async () => {
  try {
    mongoose.connect(
      process.env.URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (!err) {
          console.log('Connected to:', process.env.URL);
        } else {
          console.warn('Connection failure with error:', err);
        }
      }
    );
  } catch (err) {
    console.warn('Connection failure:', err);
  }
};

module.exports = databaseConnect;
