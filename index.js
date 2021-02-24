const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('<h1>The beginning of Resume genrator!</h1>')
})

app.use('/', express.static('/home/site/wwwroot', options));

app.listen(process.env.PORT)