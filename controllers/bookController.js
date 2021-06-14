const express = require('express')
,router = express.Router()
,Book =  require('../models/books')

// book_index, book_details, book_create_get, book_post, book_delete
const book_index = (req,res) => {
    req.json({data:'books from database'})
}

module.exports = {
    book_index
}