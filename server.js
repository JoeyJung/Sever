//basic setting express library
const express = require('express')
const app = express()

//launch a server on 8000 port and print message
app.listen(8000, function(){
  console.log('listening on 8000')
});