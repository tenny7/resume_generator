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

const app = express()
const port = process.env.PORT || 3000

//app use statements
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


const router = express.Router()
bookRoutes = require('./routes/bookRoutes')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

app.get('/', (req,res) => {
    res.json({ data: 'Special root access'})
})

app.use('/books', bookRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))
