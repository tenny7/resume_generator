const express = require('express')
const router = express.Router()


exports.RenderHomepage = (req, res) => {
    res.render('index')
}

