const express = require('express')
const {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)

router.get('/me', authMiddleware, (req, res) => {
  const { email, userId } = req.user
  res.json({ email, userId })
})
module.exports = router
