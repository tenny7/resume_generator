if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
app.use(express.static('public'))
const path = require("path");
var cors = require('cors')
const app = express()
app.use(cors())

const port = process.env.PORT || 3000

const things = require('./routes/things')


// connect Database
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose!'))


app.get('/', (req,res) => {
    res.send('root access')
})

app.use('/things', things)

app.listen(port, () => console.log('Server is running on the localhost:'+ port))