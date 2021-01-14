const express = require('express')
const restful = require('node-restful')
const server = express = express()
const mongoose = restful.mongoose

//database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//Test
server.get('/', (req, res, next) => res.send('back-end ok'));

//Start server
server.listen(3000)