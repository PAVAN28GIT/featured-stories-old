const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// Get all blog posts
router.get('/', async (req, res) => { // Correct path
  try {
    const posts = await Post.find();
    res.status(200).json({ blogs: posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Create a new blog post
router.post('/', async (req, res) => { // Correct path
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to create post' });
  }
});

module.exports = router;
