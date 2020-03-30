const Sequelize = require('sequelize');
const pg = require('pg');
module.exports = new Sequelize('postgres', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});