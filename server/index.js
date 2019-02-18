'use strict'

var express = require('express')
var fs = require('fs')
var https = require('https')
var path = require('path')
var app = express();

const directoryToserve = 'client'
const port = 3443;

app.use("/", express.static(path.join(__dirname,'..', directoryToserve)))

const httpsOptions ={
  cert:fs.readFileSync(path.join(__dirname,'ssl','server.crt')),
  key:fs.readFileSync(path.join(__dirname,'ssl','server.key'))
}

https.createServer(httpsOptions,app)
.listen(port,function(){
  console.log(`serving the ${directoryToserve}/ direc to https:localhost:${port}`);
})
