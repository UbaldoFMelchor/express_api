// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id:1, name:"Ubaldo1"}
    const explorer2 = {id:2, name:"Ubaldo2"}
    const explorer3 = {id:3, name:"Ubaldo3"}
    const explorer4 = {id:4, name:"Ubaldo4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
    // $[{"id":1,"name":"Ubaldo1"},{"id":2,"name":"Ubaldo2"},{"id":3,"name":"Ubaldo3"},{"id":4,"name":"Ubaldo4"}]
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Ubaldo"}
    res.status(200).json(explorer)
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})