if (process.env.NODE_ENV !== 'production') { // set environment
    require('dotenv').config()
}
const path = require("path");
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const logger = require('morgan')
const port = process.env.PORT || 5000

app.use('/public',express.static('public'))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const AuthRoutes = require('./routes/AuthRoutes')
const bookRoutes = require('./routes/BookRoutes')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
.once('open', () => console.log('connected'))
.on('error', error => console.log(error))

app.use(AuthRoutes)
app.use(bookRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))



