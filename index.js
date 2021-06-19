//set envionment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const path = require("path");
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000



//app use statements
app.use(express.urlencoded({extended: true}))
app.set(express.json())
app.use('/public',express.static('public'))
app.set('views', 'views')
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(cors())

const bookRoutes = require('./routes/BookRoutes')
const indexRoutes = require('./routes/IndexRoutes')
const contactRoutes = require('./routes/ContactRoutes')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
.once('open', () => console.log('connected'))
.on('error', error => console.log(error))

app.use('/', indexRoutes)
app.use(bookRoutes)
app.use(contactRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))



