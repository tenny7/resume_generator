const express = require('express')
,router = express.Router()
,Book =  require('../models/books')
,Author = require('../models/author')
,mongoose = require('mongoose')

// book_index, book_details, book_create_get, book_post, book_delete
const book_index = (req,res) => {
    let book = new Book({
        _id         : mongoose.Types.ObjectId,
        title       : req.body.title,
        description : req.body.description
    })
    book.save().then((result) => {
        res.json(result)
    })
    .catch((err) => {
        req.json(err)
    })
    
}

const book_post = (req,res) => {
    
}

module.exports = {
    book_index
}