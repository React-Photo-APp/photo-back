import Picture from '../models/Picture';

const getPictures = async (req, res) => {
  const pics = await Picture.find();
  res.send(pics);
};

const createPicture = async (req, res) => {
  const create = await Picture.create(req.body);
  res.send(create);
};
export { createPicture, getPictures };
