const express = require('express')
const app = express()
const port = 3000

const fizzbuzz = require('./libs/FizzBazz')

app.get('/', (req, res) => {
    res.send('Hello World\n')
})

app.get('/fizzbuzz/:num', (req, res) => {
    const num = req.params.num
    const resStr = fizzbuzz(Number(num))
    res.send(resStr)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})