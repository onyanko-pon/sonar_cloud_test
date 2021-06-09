const express = require('express')
const app = express()
const port = 3000

const fizzbuzz = require('./libs/FizzBazz')
const Add = require('./libs/Add')

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

