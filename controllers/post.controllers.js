const Post = require("../models/post.models.js");
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePostById = async (req, res) => {
  const { _id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      { title, content },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePostById = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(_id);
    res.json(deletedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost, updatePostById, deletePostById };
