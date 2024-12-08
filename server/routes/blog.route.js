const express = require('express')
const router = express.Router()

const { showBlogs, getBlogById, createBlog, updateBlog, deleteBlog, getBlogByUser } = require('../controllers/blog.controller')

router.get('/', showBlogs)
router.get('/:id', getBlogById)
router.get('/my-blogs/:email', getBlogByUser)
router.post('/publish', createBlog)
router.put('/update/:id', updateBlog)
router.delete('/delete/:id', deleteBlog)

module.exports = router
