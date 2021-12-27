import util from 'util';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

require('dotenv');

const storage = new GridFsStorage({
  url: process.env.DATABASE_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-pic-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-pic-${file.originalname}`
    };
  }
});

const uploadFiles = multer({ storage }).single('file');
const uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;
