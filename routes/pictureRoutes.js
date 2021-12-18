import express from 'express';
import { createPicture, getPictures } from '../controllers/pictureController';

const router = express.Router();

const picRoutes = router;

picRoutes.post('/', (req, res) => {
  createPicture(req, res);
});

picRoutes.get('/', (req, res) => {
  getPictures(req, res);
});

export default picRoutes;
