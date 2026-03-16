const express = require("express");
const { insertImage, showImages } = require("../controllers/image.controller");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const imageRouter = express.Router();

imageRouter.post("/create-post", upload.single("image"), insertImage);
imageRouter.get("/posts", showImages);

module.exports = imageRouter;
