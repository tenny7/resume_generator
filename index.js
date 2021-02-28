const express = require('express')
const path = require("path");
const app = express()
const base_path = path.join(__dirname, 'views/')

const router = express.Router()
const port = process.env.PORT || 3000

app.set('View engine', 'html')
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist/js')))

app.set("views", path.join(__dirname, "views"));

app.get('/', (req,res) => {
    res.sendFile(base_path +'index.html')
})

app.get('/layout', (req,res) => {
    res.sendFile(base_path +'layout.html')
})

app.use('/', router)

app.listen(port, () => console.log('Server is running on the localhost:'+port))