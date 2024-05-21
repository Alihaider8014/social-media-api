// routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const authenticateJWT = require('../Middleware/authMiddleware');
const commentController = require('../Controllers/commentController');

router.post('/', authenticateJWT, commentController.addComment);
router.get('/:postId', authenticateJWT, commentController.getCommentsByPostId);
router.post('/reply', authenticateJWT, commentController.replyToComment);

module.exports = router;
