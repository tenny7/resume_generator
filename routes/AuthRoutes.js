const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/authController')

router.get('/loginForm', AuthController.RenderLoginForm)
router.get('/registrationForm', AuthController.RenderRegistrationForm)

module.exports = router

