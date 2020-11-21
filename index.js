const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.all('*', (request, response) => {
  return response.sendFile(path.join(__dirname, 'public', '404.html'))
})
/*
app.all('*', (request, response) => {
  return response.status(404).send('/public/404.html')
}) */
app.listen(1337)
