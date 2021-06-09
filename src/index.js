const express = require('express')
const app = express()
const port = 3000

const fizzbuzz = require('./libs/FizzBazz')
const Add = require('./libs/Add')
const Multi = require('./libs/Multi')
const Div = require('./libs/Div')
const RamdomName = require('./libs/RamdomName')

app.get('/', (req, res) => {
    res.send('Hello World\n')
})

app.get('/fizzbuzz/:num', (req, res) => {
    const num = req.params.num
    const resStr = fizzbuzz(Number(num))
    res.send(resStr)
})

app.get('/add/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    const sum = Add(Number(num1), Number(num2))
    res.send(sum)
})

app.get('/multi/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    const sum = Multi(Number(num1), Number(num2))
    res.send(sum)
})

app.get('/div/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    const sum = Div(Number(num1), Number(num2))
    res.send(sum)
})

app.get('/ramdomName', (req, res) => {
    const name = RamdomName()
    res.send(name)
})

app.get('/users', (req, res) => {
    res.json({
        users: [
            {id: 1, name: "maruyama"},
            {id: 2, name: "hogehoge"},
            {id: 3, name: "aaaaa"},
            {id: 3, name: "warawara"}
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

