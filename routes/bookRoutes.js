const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')

router.get('/books', BookController.bookIndex)
router.post('/book/create', BookController.bookCreate)



module.exports = router