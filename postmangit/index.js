const express =  require('express')
const conn = require('./db')
const Products = require('./models/Products')

const app = express()

app.use(express.json())

app.post('/products/create',async(req,res) => {
    const {name,quantity,price} = req.body

    if(!name){
        res.status(422).json({message: 'O campo name é obrigatório'})
        return
    }

    if(!price){
        res.status(422).json({message: 'O campo price é obrigatório'})
        return
    }

    const productsExists = await Products.findOne({where: {name: name}})

    if (productsExists){
        res.status(422).json({message: 'Produto existente!'})
    }

    try {
        const newProducts = await Products.create({name,quantity,price})
        res.status(201).json({message: 'Produto cadastrado com sucesso!', newProducts})
    } catch (error) {
        res.status(500).json({message: 'Erro ao conectar com o servidor!', error})    }
})

app.get('/products',async(req,res) => {
    const products = await Products.findAll()

    if(products.length === 0){
        res.status(400).json({message: 'Nenhum produto cadastrado'})
        return
    }

    try {
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'Erro ao conectar com o servidor!', error})    }
    }


)

app.get('/',(req,res) => {
    res.status(200).json({message: 'Servidor ok'})
})

conn.sync().then(() => app.listen(3000)).catch(err => console.error(err))