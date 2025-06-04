const express = require('express')
const {
  savePassword,
  getHistory,
  overridePasswords,
} = require('../controllers/passwordController')
const auth = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/save', auth, savePassword)
router.get('/getHistory', auth, getHistory)
router.post('/override', auth, overridePasswords)

module.exports = router
