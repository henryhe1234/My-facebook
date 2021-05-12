const Post = require("../../models/Post");
module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find(); //done by mongo db
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
