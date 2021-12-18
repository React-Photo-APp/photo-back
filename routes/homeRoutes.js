import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

const homeRoutes = router;

homeRoutes.get('/', (req, res) => {
  homeController.ping(req, res);
});

export default homeRoutes;
