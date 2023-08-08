//basic setting express library
const express = require('express')
const app = express()

//launch a server on 8008 port and print message
app.listen(8008, function(){
  console.log('listening on 8008')
})

// Get HTML file (HOME)
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')

// })

//send form.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html')

})

// do something when a post request is made to the /add path.
app.post('/add', (req, res) => {
  res.send(' transmission completed! ')
})