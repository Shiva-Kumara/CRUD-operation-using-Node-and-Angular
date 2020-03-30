const Sequelize = require('sequelize');
const db = require('../config/db');
let schema = 'public';

var User = db.define('users',{

    first_name:{
        type: Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.NUMBER
    }
},{
    schema: schema,
    freezeTableName: true
});

module.exports =  User ;