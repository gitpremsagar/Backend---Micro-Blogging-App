const mongoose = require("mongoose");

// Define the schema for posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Create a model for posts
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
