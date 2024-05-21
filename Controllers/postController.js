// controllers/postController.js

const postService = require('../services/postService');

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Please provide title and content' });
    }
    const userId = req.user.userId; // Extract user ID from JWT payload
    const post = await postService.createPost(title, content, userId);
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    next(error);
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const posts = await postService.getPosts(userId);
    res.json({ message: 'Post created successfully', posts });
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const userId = req.user.userId;
    const post = await postService.getPostById(postId, userId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};
