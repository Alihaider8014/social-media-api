const Comment = require('../Models/Comment');

exports.addComment = async (content, postId, userId, parentId) => {
    const comment = await Comment.create({ content, postId, userId, parentId });
    return comment;
};


exports.getCommentsByPostId = async (postId, userId) => {
    const comment = await Comment.findOne({
        where: {
            userId: userId,
            postId: postId
          }
    });
    return comment;
};

exports.replyToComment = async (content, postId, userId, parentId) => {
    const comment = await Comment.create({ content, postId, userId, parentId });
    return comment;
}

