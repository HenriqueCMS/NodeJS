const express = require ("express")
const path = require("path")

const app = express()

const basePath = path.join(__dirname, "src/pages/")

const port1 = 3000

// ROTAS
const rotaContato = require("./routes/contato")
// ROTAS

// res=resposta e req=requerimento

// MIDWARES
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("src/public"))

// ROTAS
app.use("/contato",rotaContato)
// ROTAS

// MIDWARES


app.get("/",(req, res) => {
    res.status(200).sendFile(`${basePath}/index.html`)
})

app.use("/",(req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})



app.listen(port1,() => {
    console.log("TUDO CERTO")
})