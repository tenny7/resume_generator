const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('<h1>The beginningjghjggmmm of Resume genrator me!</h1>')
})

app.listen(3000)