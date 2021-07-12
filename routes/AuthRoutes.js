const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/authController')

router.get('/loginForm', AuthController.RenderLoginForm)

module.exports = router

