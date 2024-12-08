const express = require('express')
const router = express.Router()
const { createUser, loginUser, verifyUser, profile } = require('../controllers/usuario.controller.js')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/home', verifyUser, profile)

module.exports = router
