const express = require('express');
const cors = require('cors');
const databaseConnect = require('./config/database');
const router = require('./routes/router');

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
