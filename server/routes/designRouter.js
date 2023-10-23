const express = require("express");

const { addDesign } = require("../controllers/designControllers");

const designRouter = express.Router();

designRouter.post("/add/new", addDesign);

designRouter.get("/issued", () => {});

module.exports = designRouter;
