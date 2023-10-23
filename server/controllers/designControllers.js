const Design = require("../models/designs");

const addDesign = async (req, res, next) => {
  const design = new Design({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    imgurl: req.body.imgurl,
    type: req.body.type,
  });

  try {
    const newDesign = await design.save();
    res.status(201).json(newDesign);
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};

module.exports = { addDesign };
