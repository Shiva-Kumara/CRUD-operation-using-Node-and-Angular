const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/user');

process.env.SECRET_KEY = 'secret';

module.exports.register = (req, res) =>{
    console.log("inside the register fun");
    const userData = {
        first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            const hash = bcrypt.hashSync(userData.password, 10);
            userData.password = hash;
            User.create(userData)
            .then(user => {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
                res.json({ token: token })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
        }   else{
            res.json({ error: 'User already exist' })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

module.exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.password, user.password)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1400
            })
            res.json({token: token, user: user})
        } else{
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

module.exports.userProfile = (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where: {
            id: decoded.id
        }
    })
    .then(user => {
        if(user) {
            res.json(user)
        }else {
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}
