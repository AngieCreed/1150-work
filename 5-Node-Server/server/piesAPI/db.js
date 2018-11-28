// where we put all of our credentials for sequelize - will be imported into index.js

require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS,{
    host: 'localhost',
    dialect: 'postgres'
})  //creating a new instance of class Sequelize

sequelize.authenticate() 
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err))

module.exports = sequelize
