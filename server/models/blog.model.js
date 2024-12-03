const mongoose = require('mongoose')
const blog = mongoose.Schema(
  {
    title: { type: String, required: [true, 'title is required'] },
    content: { type: String, required: [true, 'content is required'] },
    author: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
const Blog = mongoose.model('Blog', blog)

module.exports = Blog
