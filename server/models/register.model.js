const mongoose = require('mongoose')
const user = mongoose.Schema(
  {
    firstName: { type: String, required: [true, 'firstname is required'] },
    lastName: { type: String, required: [true, 'lastname is required'] },
    email: { type: String, required: [true, 'email is required'], unique: true },
    password: { type: String, required: [true, 'password is required'] }
  },
  {
    timestamps: true
  }
)
const User = mongoose.model('User', user)

module.exports = User
