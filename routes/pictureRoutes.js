import express from 'express';
import {
  createPicture, getPictures, download, getListFiles, uploadFiles
} from '../controllers/pictureController';

const router = express.Router();

const picRoutes = router;

picRoutes.post('/', (req, res) => {
  createPicture(req, res);
});

picRoutes.get('/', (req, res) => {
  getPictures(req, res);
});

picRoutes.post('/upload', (req, res) => uploadFiles(req, res));

picRoutes.get('/files', (req, res) => getListFiles(req, res));

picRoutes.get('/files/:name', (req, res) => download(req, res));

export default picRoutes;
