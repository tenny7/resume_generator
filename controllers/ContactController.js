const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')


exports.RenderContact = (req, res) => {
    res.render('contact')
}

exports.ContactCreate = async (req, res) => {
    contact = await Contact.create({
        name:req.body.name,
        message: req.body.message
    })
    res.json({status: 'ok'})
    // contact.save().then(()=> res.json('success')).catch((err) => res.json('failed to insert'))

}

