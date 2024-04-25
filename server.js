const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
