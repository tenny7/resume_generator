// const express = require('express')
// const bodyParser = require('body-parser')
const Book =  require('../models/books')
// const Author = require('../models/author')
// const { ObjectId } = require('mongodb')




const bookCreate = async (req,res) => { 
    let book = await new Book({
        title           : req.body.title,
        description     : req.body.description,
        publishedDate   : req.body.publishDate,
        pages           : req.body.pages,
        item            : req.file.path
    })
    book.save()
    .then(()=> {
        res.render('upload',{ id:book._id, successful:'successful' })
    }).catch((err) => {
        res.json({error: err })
    })
    
}

const uploadCover = async (req,res) => {
    const id = req.params.id
    try {
        await Book.update({ _id:id },{ 'bookcover' : req.body.bookcover })
        res.redirect('books',{success: 'successful'})
    } catch (error){
        res.json({error: 'failed to upload cover ' + error})
    }

}

const bookIndex = async (req,res) => {
    book = await Book.find({})
    res.render('books', {data: book})
}

const RenderUploadPage = (req, res) => {
    res.render('upload')
}


module.exports = {
    bookIndex,
    bookCreate,
    RenderUploadPage,
    uploadCover
}
