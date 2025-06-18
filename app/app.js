const express = require('express');
const app = express();
const router =('./routes/gymrouter')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

module.exports=app