const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

mongoose.connect(process.env.MONGO_DB_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

app.use(cors());

app.use(express.json());

app.use("/api/posts", require("./routes/post.routes.js"));

app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
