const User = require('../models/register.model.js')
const bcrypt = require('bcrypt')

const createUser = (req, res) => {
  const { name, email, password } = req.body
  bcrypt.hash(password, 10)
    .then(hash => {
      User.create({ name, email, password: hash })
        .then(user => res.json(user))
        .catch(error => {
          res.status(500).json({ message: error.message })
        })
    })
    .catch(err => console.error(err.message))
}

const loginUser = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            res.json('Success')
          } else {
            res.status(404).json('The password is incorrect', err)
          }
        })
      } else {
        res.status(404).json('No record existed')
      }
    })
}

module.exports = {
  createUser,
  loginUser
}
