const User =  require('../models/user')

exports.RenderLoginForm = (req, res) => {
    res.render('login')
}

exports.RenderLoginForm = (req, res) => {
    res.render('register')
}

exports.UserCreate = async (req, res) => {
    user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({status: 'user created'})
    res.sendStatus(200)
}

// jwt.sign({user}, 'secretkey', (err, token) => {
//     res.json({
//         token
//     });
// });