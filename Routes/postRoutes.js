// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const authenticateJWT = require('../Middleware/authMiddleware');
const postController = require('../Controllers/postController');

router.post('/create', authenticateJWT, postController.createPost);
router.get('/get-posts', authenticateJWT, postController.getPosts);
router.get('/get-post/:id', authenticateJWT, postController.getPostById);

module.exports = router;
