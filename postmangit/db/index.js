const {Sequelize} = require("sequelize")
require('dotenv').config()

const {DATABASE,USER,HOST,PASSWORD} = process.env

const conn = new Sequelize(DATABASE,USER,PASSWORD,{
    host: HOST,
    dialect: 'mysql',
    define: {
        deletedAt: false,
        updatedAt: true,
        createdAt: true
    }
})

module.exports = conn