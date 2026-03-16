const express = require("express");
const imageRouter = require("./routes/image.route");

const app = express();
app.use(express.json());

app.use("/api", imageRouter);

module.exports = app;
