//set envionment
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
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine','hbs')
app.use(cors())

const bookRoutes = require('./routes/BookRoutes')
const indexRoute = require('./routes/IndexRoutes')

// mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true
// })

// db = mongoose.connection
// db.on("error", console.error.bind(console, "connection error:"));

app.use('/', indexRoute)
app.use('/books', bookRoutes)
app.listen(port, () => console.log('Server is running on the localhost:'+ port))
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }

