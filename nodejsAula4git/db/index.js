const {Sequelize} = require("sequelize")

const conn = new Sequelize('store','root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        deletedAt: false,
        updatedAt: true,
        createdAt: true
    }
})

module.exports = conn