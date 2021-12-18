const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homeController');

const homeRoutes = router;

homeRoutes.get('/', (req, res) => {
  homeController.ping(req, res);
});

module.exports = homeRoutes;
