const express = require("express");

const {
  getPosts,
  createPost,
  updatePostById,
  deletePostById,
} = require("../controllers/post.controllers.js");

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.put("/:_id", updatePostById);

router.delete("/:_id", deletePostById);

module.exports = router;
