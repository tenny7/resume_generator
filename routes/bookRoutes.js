const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/images')
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 5} })
const singleupload = upload.single('item')
const singleupload2 = upload.single('bookcover')

router.get('/books', BookController.bookIndex)
router.post('/book/create', singleupload, BookController.bookCreate)
router.get('/book/upload', BookController.RenderUploadPage)
router.post('/book/cover/upload/:id', singleupload2, BookController.uploadCover)

module.exports = router