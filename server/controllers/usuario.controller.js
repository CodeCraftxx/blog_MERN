const User = require('../models/register.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body
  bcrypt.hash(password, 10)
    .then(hash => {
      User.create({ firstName, lastName, email, password: hash })
        .then(user => res.json(user))
        .catch(error => {
          res.status(500).json({ message: error.message })
        })
    })
    .catch(err => console.error(err.message))
}

const loginUser = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: { $regex: `^${email}$`, $options: 'i' } })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign({ email: user.email, first: user.firstName, last: user.lastName }, process.env.JWT_KEY, { expiresIn: '1d' })
            res.cookie('token', token)
            res.json('Success!')
          } else {
            res.status(404).json('The password is incorrect', err)
          }
        })
      } else {
        res.status(404).json('No record existed')
      }
    })
}

const verifyUser = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.json('The token was not available')
  } else {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) return res.json('Token is wrong')
      req.user = decoded
      next()
    })
  }
}

const profile = (req, res) => {
  const profile = { first: req.user.first, last: req.user.last, email: req.user.email }
  res.json({ message: 'Success!', profile })
}

module.exports = {
  createUser,
  loginUser,
  verifyUser,
  profile
}
