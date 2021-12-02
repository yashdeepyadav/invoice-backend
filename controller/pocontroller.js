const poModel = require('../model/pomodel')

const newpo = async (req, res) => {
  try {

    const po = await poModel.create(req.body);
    res.status(201).json({
      status: true,
      po
    })
  } catch (error) {
    res.status(401).send(error);
  }
};

const allpo = async (req, res) => {

  let po;
  try {
    po = await poModel.find({});
    res.status(201).json({
      status: true,
      po
    })
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = { newpo, allpo };