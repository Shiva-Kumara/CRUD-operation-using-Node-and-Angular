const Sequelize = require('sequelize');
const db = require('../config/db');
let schema = 'public';

var Employee = db.define('employee',{

    name:{
        type: Sequelize.STRING
    },
    designation:{
        type: Sequelize.STRING
    },
    office:{
        type: Sequelize.STRING
    },
    salary:{
        type: Sequelize.NUMBER
    }
},{
    schema: schema,
    freezeTableName: true
});

module.exports =  Employee ;