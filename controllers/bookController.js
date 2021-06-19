const express = require('express')
,router = express.Router()
const bodyParser = require('body-parser')
,Book =  require('../models/books')
,Author = require('../models/author')
const { ObjectId } = require('mongodb')

// book_index, book_details, book_create_get, book_post, book_delete
const bookCreate = async (req,res) => {
    let book = await Book.create({
        title       : req.body.title,
        description : req.body.description
    })
    res.json({data: book })
}

const bookIndex = (req,res) => {
    res.render('books')
}


module.exports = {
    bookIndex,
    bookCreate
}