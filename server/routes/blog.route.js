const express = require('express')
const router = express.Router()

const { showBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')

router.get('/', showBlogs)
router.get('/:id', getBlogById)
router.post('/publish', createBlog)
router.put('/update/:id', updateBlog)
router.delete('/delete/:id', deleteBlog)

module.exports = router
