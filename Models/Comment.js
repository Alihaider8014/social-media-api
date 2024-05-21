// models/Post.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Database/DBConnection');

const Comment = sequelize.define('comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  postId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  userId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  parentId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
});

module.exports = Comment;
