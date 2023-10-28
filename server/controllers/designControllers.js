const Design = require("../models/designs");
const Trending = require("../models/trending");

const addDesign = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imgurl = req.file.path;

  const design = new Design({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    imgurl: imgurl,
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

const addTrending = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imgurl = req.file.path;

  const design = new Trending({
    id: req.body.id,
    name: req.body.name,
    imgurl: imgurl,
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

const getDesignsByType = async (req, res, next) => {
  const designType = req.params.designType;
  if (!designType) {
    res.status(200).json({ message: "No valid Parameters" });
  }

  try {
    // Use the Mongoose model to find designs with the specified type
    const designs = await Design.find({ type: designType });

    if (!designs || designs.length === 0) {
      return res
        .status(404)
        .json({ message: `No ${designType} designs found` });
    }

    // Return the designs as JSON
    res.status(200).json(designs);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const trendingDesignsByType = async (req, res, next) => {
  const designType = req.params.designType;

  try {
    // Use the Mongoose model to find trending designs with the specified type
    const trendingDesigns = await Trending.find({ type: designType });

    if (!trendingDesigns || trendingDesigns.length === 0) {
      return res
        .status(404)
        .json({ message: `No trending ${designType} designs found` });
    }

    // Return the trending designs as JSON
    res.status(200).json(trendingDesigns);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getSpecificDesignDetails = async (req, res, next) => {
  const designId = req.params.designId;

  try {
    // Use the Mongoose model to find a specific design by ID and type
    const specificDesign = await Trending.findOne({ id: designId });

    if (!specificDesign) {
      return res.status(404).json({
        message: `No design with ID ${designId} found for type ${designType}`,
      });
    }

    // Return the specific design details as JSON
    res.status(200).json(specificDesign);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addDesign,
  getDesignsByType,
  trendingDesignsByType,
  getSpecificDesignDetails,
  addTrending,
};
