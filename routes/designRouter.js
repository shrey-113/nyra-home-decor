const express = require("express");

const {
  addDesign,
  getDesignsByType,
  trendingDesignsByType,
  getSpecificDesignDetails,
  addTrending,
  getOneForEachType,
} = require("../controllers/designControllers");
const upload = require("../middlewares/file-upload");

const designRouter = express.Router();

designRouter.post("/add/new", upload.single("image"), addDesign);

designRouter.post("/add/trending", upload.single("image"), addTrending);

designRouter.get("/get", getOneForEachType);

designRouter.get("/type", getDesignsByType);

designRouter.get("/trending", trendingDesignsByType);

designRouter.get("/specific", getSpecificDesignDetails);

module.exports = designRouter;
