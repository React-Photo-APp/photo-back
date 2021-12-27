import mongoose from 'mongoose';

require('dotenv').config();

const databaseConnect = async () => {
  try {
    mongoose.connect(
      process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (!err) {
          console.log('Connected to:', process.env.DATABASE_URL);
        } else {
          console.warn('Connection failure with error:', err);
        }
      }
    );
  } catch (err) {
    console.warn('Connection failure:', err);
  }
};

export default databaseConnect;
