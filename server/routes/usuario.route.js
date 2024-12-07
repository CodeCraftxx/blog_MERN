const express = require('express')
const router = express.Router()
const { createUser, loginUser, verifyUser } = require('../controllers/usuario.controller.js')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/home', verifyUser, (req, res) => {
  return res.json('Success!')
})

module.exports = router
