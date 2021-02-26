const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('<h1>The beginning of Resume genrator!</h1>')
})

var options = {

    index: 'index.html'
    
    };

app.use('/', express.static('/home/site/wwwroot', options));

app.listen(process.env.PORT || 3000)