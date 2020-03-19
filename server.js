const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')

const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
db();
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La Aplicacion Esta escuchando en http://localhost:3000')