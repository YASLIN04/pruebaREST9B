const express = require('express');
const app = express();
const rout = require('./routes/gymrouter')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/gym', rout)

module.exports=app