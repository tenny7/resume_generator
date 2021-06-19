const express = require('express')
const router = express.Router()
const ContactController = require('../controllers/ContactController')

router.get('/contact', ContactController.RenderContact)

router.post('/contact/create', ContactController.ContactCreate)

module.exports = router