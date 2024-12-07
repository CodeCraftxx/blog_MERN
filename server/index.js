const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const { PORT, mongoURL } = require('./config.js')
const blogRouter = require('./routes/blog.route.js')
const registerRouter = require('./routes/usuario.route.js')
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}
const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// Bring the blog routes
app.use('/api/blogs', blogRouter)
app.use('/api/users', registerRouter)

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
