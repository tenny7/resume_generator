const express = require('express')
const path = require("path");

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

console.log(__dirname, "views");

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/layout', (req,res) => {
    res.render('layout')
})

app.use('/', router)

app.listen(port, () => console.log('Server is running on the localhost:'+port))