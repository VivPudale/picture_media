const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to Mongodb successfully");
  } catch (error) {
    console.log("Error while connecting to Mongodb", error.message);
  }
};

module.exports = connectDB;
