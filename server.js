const express = require 'express';
const app = express()
const server = require ('http').server(app)
const io = require ('socket.io')(server)

app.set('view engine','ejs')

server.listen(3000)