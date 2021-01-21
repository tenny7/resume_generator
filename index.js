const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('<h1>The beginning of Resume genrator!</h1>')
})

app.listen(3000)