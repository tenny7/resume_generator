const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.render('index')
})

var options = {
    index: 'index.html'
    };

app.use('/', express.static('/home/site/wwwroot', options));

app.listen(port, () => console.log('Server is running on localhost:'+port))