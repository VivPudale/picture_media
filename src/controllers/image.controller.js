const imageModel = require("../models/image.model");
const uploadFile = require("../services/storage.services");

const insertImage = async (req, res) => {
  try {
    const imageURL = await uploadFile(req.file.buffer);
    // console.log(imageURL);

    const result = await imageModel.create({
      image: imageURL.url,
      caption: req.body.caption,
    });

    res.status(201).json({
      message: "Image Uplaoded Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error uploading image",
      error: error.message,
    });
  }
};

const showImages = async (req, res) => {
  try {
    const result = await imageModel.find();
    res.status(200).json({
      message: "Images fetched successfully",
      images: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching image",
      error: error.message,
    });
  }
};

module.exports = { insertImage, showImages };
