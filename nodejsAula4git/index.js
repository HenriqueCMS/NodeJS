// const express = require('express')
// const exphbl = require('express-handlebars')

// const app = express()
// const hbs = exphbl.create({
//     extname: 'hbs'
// })

// app.engine('hbs', hbs.engine)
// app.set('view engine', 'hbs')
// app.set('views', '.src/views')

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(express.static('public'))

// app.get('/contatos/:id', (req, res) => {

//     const id = req.params.id

//     res.status(200).render('users', { id })
// })

// app.get('/contato', (req, res) => {
//     res.status(200).render('contato')
// })

// app.get('/', (req, res) => {
//     try {
//         res.status(200).render('home')
//     } catch (error) {
//         console.error(error)
//     }
// })

// app.listen(3000)

const express = require('express')
const exphbl = require('express-handlebars')
const conn = require('./db')
const Producs = require('./models/Products')

const hbs = exphbl.create({
    extname: 'hbs'
})
const app = express()

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.post('/products/create', async (req,res) => {
    const {nome,qtd,price} = req.body
    const newProducts = await Producs.create({nome,qtd,price})
    console.log(newProducts)
    res.redirect('/')
})

app.get('/', (req, res) => {
    try {
        res.status(200).render('home')
    } catch (error) {
        console.error(error)
    }
})

conn.sync().then(()=>app.listen(3000)).catch(err=>console.error(err))