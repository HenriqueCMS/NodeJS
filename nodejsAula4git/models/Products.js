const {DataTypes} = require('sequelize')
const conn = require('../db')

const Products = conn.define('Producs',{
    _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    qtd: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false
    }
})

module.exports = Products