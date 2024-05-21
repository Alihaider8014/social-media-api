// models/Post.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Database/DBConnection');

const Post = sequelize.define('posts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
});

module.exports = Post;
