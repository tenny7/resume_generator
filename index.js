const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('The beginning of Resume genrator!')
})

// var options = {

//     index: 'index.js'
    
//     };

// app.use('/', express.static('/home/site/wwwroot', options));

app.listen(process.env.PORT || 3000)