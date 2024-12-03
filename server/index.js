const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const { PORT, mongoURL } = require('./config.js')
const blogRouter = require('./routes/blog.route.js')
const registerRouter = require('./routes/usuario.route.js')

const app = express()

app.use(cors())
app.use(express.json())

// Bring the blog routes
app.use('/api/blogs', blogRouter)
app.use('/api/users', registerRouter)

// app.post('/logout', (req, res) => {})

// app.get('/protected', (req, res) => {})

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor!!')
})

mongoose
  .connect(
    mongoURL
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err)
  })
