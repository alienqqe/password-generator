const express = require('express')
const {
  register,
  login,
  verifyEmail,
} = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/verify-email', verifyEmail)

router.get('/me', authMiddleware, (req, res) => {
  const { email, userId } = req.user
  res.json({ email, userId })
})
module.exports = router
