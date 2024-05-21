// app.js

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./Middleware/errorHandler');
const authenticateJWT = require('./Middleware/authMiddleware');
const userRoutes = require('./Routes/userRoutes');
const postRoutes = require('./Routes/postRoutes');
const commentRoutes = require('./Routes/commentRoutes');
require('dotenv').config();



const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', authenticateJWT, postRoutes); // Apply authentication middleware
app.use('/api/comments', authenticateJWT, commentRoutes); // Apply authentication middleware

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
