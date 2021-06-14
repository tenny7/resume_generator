//set envionment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import statements
const express = require('express')
// const mongoose = require('mongoose')
const sqlite3 = require('sqlite3').verbose()
const path = require("path");
const things = require('./routes/things');
const { default: axios } = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

// app.set('view engine', 'ejs')

//app use statements
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// shorten log to console 
log = console.log
displayError = console.error

// connect Database
// mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
// const db = mongoose.connection
// db.on('error', error => displayError(error))
// db.once('open', () => log('Connected to Mongoose!'))

let db = new sqlite3.Database('./database/employee.db', (err) => {
    if (err){
        displayError(err)
    }else{
        log("connected")
    }
})

//api calls
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/things', things)

app.post('/software', (req,res) => {
    db.serialize(() => {
        
        db.run(`INSERT INTO users(name) VALUES(?)`, req.body.name, (err) => {
            if(err){
                displayError(err)
            }else{
                res.json({names: req.body.name})
                // res.render('index', {names: req.body.name})
                log(`data inserted ${req.body.name}`)
            }
        })
    })
    db.close()
})


app.listen(port, () => console.log('Server is running on the localhost:'+ port))