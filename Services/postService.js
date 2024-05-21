const Post = require('../Models/Post');

exports.createPost = async (title, content, userId) => {
    const post = await Post.create({ title, content, userId });
    return post;
};

exports.getPosts = async (userId) => {
    const posts = await Post.findAll({
        where: {
            userId: userId
          }
    });
    return posts;
};

exports.getPostById = async (postId, userId) => {
    const post = await Post.findOne({
        where: {
            userId: userId,
            id: postId
          }
    });
    return post;
};

