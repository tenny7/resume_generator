//set envionment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import statements
const express = require('express')
const mongoose = require('mongoose')
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors')
// const router = express.Router()

const app = express()
const port = process.env.PORT || 3000

//app use statements
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())



const bookRoutes = require('./routes/BookRoutes')
const indexRoute = require('./routes/IndexRoutes')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"));


app.use(indexRoute)
app.use('/books', bookRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))
