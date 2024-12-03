const Blog = require('../models/blog.model.js')

const showBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
    const formattedBlogs = blogs.map((blog) => ({
      ...blog.toObject(), // Convierte el documento de Mongoose a un objeto JavaScript
      createdAt: new Date(blog.createdAt).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }))
    res.json(formattedBlogs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params
    const blog = await Blog.find({
      _id: id
    })
    const formattedBlog = blog.map((blog) => ({
      ...blog.toObject(),
      createdAt: new Date(blog.createdAt).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }))
    res.json(formattedBlog)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createBlog = async (req, res) => {
  try {
    const blogs = await Blog.create(req.body)
    res.status(201).json(blogs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// ACTUALIZA SOLAMENTE EL CONTENT
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params
    const blog = await Blog.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    )
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    const blogUpdated = await Blog.find({ _id: id })
    res.json(blogUpdated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params
    const blog = await Blog.findOneAndDelete({
      _id: id
    })
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    res.json({ message: 'Blog deleted successfully!!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  showBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
}
