const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({data: 'home'})
})

module.exports = router