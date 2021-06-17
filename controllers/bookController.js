const express = require('express')
,router = express.Router()
,Book =  require('../models/books')
,Author = require('../models/author')

// book_index, book_details, book_create_get, book_post, book_delete
const book_index = (req,res) => {
    let book = Book.create({
        title       : req.body.title,
        description : req.body.description
    })
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    })
    
}

const book_post = (req,res) => {
    
}

module.exports = {
    book_index
}