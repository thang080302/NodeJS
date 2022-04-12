const express = require('express')
const app = express()
const post = 3000

app.get('/', function (req, res) {
  res.send('Hello XuanThang')
})

app.listen(3000, 'localhost',() => {
    console.log(`NodeJS server is running on port : ${post}`)
})