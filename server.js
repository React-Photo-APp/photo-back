import express from 'express';
import cors from 'cors';
import databaseConnect from './config/database';
import router from './routes/router';

const app = express();

const PORT = 3001;

databaseConnect();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
