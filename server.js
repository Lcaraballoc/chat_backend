const express = require('express');
const bodyParser = require('body-parser');/* 
const router = require('./components/message/network'); */
const router = require('./network/routes');

var app = express();

app.use(bodyParser.json());
/* app.use(router); */

router(app);



/* app.use('/', function (req, res){
    res.send('Hola');
}) */

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La Aplicacion Esta escuchando en http://localhost:3000')