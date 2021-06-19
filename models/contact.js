const express = require('express')
,mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model('Contact', contactSchema)
