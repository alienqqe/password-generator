const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const passwordRoutes = require('./routes/passwordRoutes')
const settingsRoutes = require('./routes/settingsRoutes')

const app = express()

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://glittery-blini-53f327.netlify.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/password', passwordRoutes)
app.use('/api/settings', settingsRoutes)

const temporaryVerificationToken = crypto.randomBytes(32).toString('hex')
console.log(temporaryVerificationToken)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
