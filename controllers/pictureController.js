import { MongoClient, GridFSBucket } from 'mongodb';
import Picture from '../models/Picture';
import uploadFilesMiddleware from '../middleware/upload';

require('dotenv');

const baseUrl = 'http://localhost:3001/pic/files/';

const mongoClient = new MongoClient(process.env.DATABASE_URL);

const uploadFiles = async (req, res) => {
  try {
    await uploadFilesMiddleware(req, res);
    if (req.file === undefined) {
      return res.send({ message: 'select a file' });
    }

    const create = await Picture.create({
      image: { name: req.file.filename, url: baseUrl + req.file.filename },
      message: req.body.message,
      author: req.body.author
    });
    return res.send(create);
  } catch (e) {
    console.warn(e);
    return res.send({
      message: `Error uploading image: ${e}`
    });
  }
};

const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db();
    const images = database.collection('photos.files');

    const cursor = images.find({});

    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: 'No files found!'
      });
    }

    const fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename
      });
    });

    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const download = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db();
    const bucket = new GridFSBucket(database, {
      bucketName: 'photos'
    });

    const downloadStream = bucket.openDownloadStreamByName(req.params.name);

    downloadStream.on('data', (data) => res.status(200).write(data));

    downloadStream.on('error', () => res.status(404).send({ message: 'Cannot download the Image!' }));

    return downloadStream.on('end', () => res.end());
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const getPictures = async (req, res) => {
  const pics = await Picture.find();
  res.send(pics);
};

const createPicture = async (req, res) => {
  const create = await Picture.create(req.body);
  res.send(create);
};

export {
  createPicture, getPictures, uploadFiles, getListFiles, download
};
