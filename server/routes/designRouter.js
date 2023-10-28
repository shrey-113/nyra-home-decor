const express = require("express");

const {
  addDesign,
  getDesignsByType,
  trendingDesignsByType,
  getSpecificDesignDetails,
  addTrending,
} = require("../controllers/designControllers");
const upload = require("../middlewares/file-upload");

const designRouter = express.Router();

designRouter.post("/add/new", upload.single("image"), addDesign);

designRouter.post("/add/trending", upload.single("image"), addTrending);

designRouter.get("/type", getDesignsByType);

designRouter.get("/trending", trendingDesignsByType);

designRouter.get("/specific", getSpecificDesignDetails);

module.exports = designRouter;
