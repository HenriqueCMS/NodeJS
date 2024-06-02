const express = require('express')
const exphbl = require('express-handlebars')

const app = express()
const hbs = exphbl.create({
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','./src/views')

// MIDWARES
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./src/public"))

app.get('/user',(req,res) => {
    const user = {
        name : 'Henrique',
        email : 'xxxxxxx.gmail.com'
    }

    const auth = false

    res.status(200).render('user' , {user,auth})
})

app.get('/user/all',(req,res)=>{
    const users = [
        {
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        },{
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        },{
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        },{
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        },{
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        },{
            name : 'Henrique',
            email : 'xxxxxxx.gmail.com'
        }

    ]

    res.status(200).render('users' , {users})

})

// app.get('/contato/:id',(req,res) => {
//     const id = req.params.id

//     res.status(200).render('user',{id})
// })

// app.get('/contato',(req,res) => {
//     res.status(200).render('contato')
// })

// app.get('/', (req, res) => {
//     try {
//         res.status(200).render('home')
//     } catch (error) {
//         console.error(error)
//     }
// })

app.listen(3000,()=>{
    console.log("the server is running http://localhost:3000");
})