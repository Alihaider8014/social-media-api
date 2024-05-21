// controllers/commentController.js

const commentService = require('../services/commentService');

exports.addComment = async (req, res, next) => {
  try {
    const { content, postId, parentId } = req.body;
    if (!content || !postId) {
      return res.status(400).json({ error: 'Please provide content and postId' });
    }
    const userId = req.user.userId; // Extract user ID from JWT payload
    const comment = await commentService.addComment(content, postId, userId, parentId);
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByPostId = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.userId;
    const comments = await commentService.getCommentsByPostId(postId, userId);
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

exports.replyToComment = async (req, res, next) => {
  try {
    const { content, postId, parentId } = req.body;
    if (!content || !postId || !parentId) {
      return res.status(400).json({ error: 'Please provide content, postId, and parentId' });
    }
    const userId = req.user.userId; // Extract user ID from JWT payload
    const reply = await commentService.addComment(content, postId, userId, parentId);
    res.status(201).json({ message: 'Reply added successfully', reply });
  } catch (error) {
    next(error);
  }
};
