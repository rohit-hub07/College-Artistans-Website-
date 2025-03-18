import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

const Post = mongoose.model('Post', postSchema);

export default Post;