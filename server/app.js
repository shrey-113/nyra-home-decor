if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { NextFunction, Request, Response } = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to mongoose"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/test", async (req, res) => {
  console.log(req.body);
  console.log("Test route hit");
  res.status(200).json({ message: "Message recieved" });
});

const designRouter = require("./routes/designRouter");

app.use("/design", designRouter);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
});
