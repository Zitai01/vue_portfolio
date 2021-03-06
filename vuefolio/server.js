const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
//const sudoku = require('./js_sudoku/index.html')
const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use('/static/sudoku', serveStatic(path.join(__dirname, '/js_sudoku')))
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.get('/static/sudoku', function(req, res) {
  res.sendFile(path.join(__dirname, '/js_sudoku/sudoku.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
