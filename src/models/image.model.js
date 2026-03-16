const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  caption: {
    type: String,
  },
});

const imageModel = mongoose.model("images", imageSchema);

module.exports = imageModel;
