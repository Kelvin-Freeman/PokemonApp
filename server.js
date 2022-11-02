
const express = require('express')
const pokemon = require('./models/pokemon')








const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:false}))
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render(`Pokies/Index`, {pokemon:pokemon} )
})

app.get('/pokemon/new', (req, res) => {
    res.render(`Pokies/New`, {pokemon:pokemon} )
})

app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    res.render('Pokies/Show', {pokemon:pokemon[id]})
}) 


app.post('/pokemon', (req, res) => {
    pokemon.push(req.body)
    console.log("hello");
    res.redirect('/pokemon')
})

app.put('/pokemon/edit', (req, res) => {
    const {id} = req.params
    pokemon.push(req.body)
    console.log("hello");
    res.redirect('/pokemon')
})
app.get('/pokemon/edit', (req, res) => {
    const {id} = req.params
    // pokemon[id].push(req.body)
    console.log("hello");
    res.redirect('/pokemon')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})