const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');

const config = require('./config');

const app = module.exports = express();
const port = config.port || 3333;

app.use(bodyParser.json());

app.get('/api/get', (req, res)=>{
  res.status(200).send("hello")
})

app.listen(port, console.log(`Server listening on port ${port}`))