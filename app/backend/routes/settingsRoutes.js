const express = require('express')
const {
  setSettings,
  getSettings,
} = require('../controllers/settingsController')
const auth = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/set', auth, setSettings)
router.get('/getSettings', auth, getSettings)

module.exports = router
