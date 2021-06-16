//set envionment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import statements
const express = require('express')
// const mongoose = require('mongoose')
const path = require("path");
const things = require('./routes/things');

const app = express()
const port = process.env.PORT || 3001

//app use statements
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const port = process.env.PORT || 3000
const router = express.Router()
bookRoutes = require('./routes/bookRoutes')

app.get('/', (req,res) => {
    res.json({ data: 'Special root access'})
})
app.use('/books', bookRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))
