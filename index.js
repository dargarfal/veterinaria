const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilando routes
app.use('/', routes());

//Conextar a MongoDb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4000; //Traemos el puerto desde el fichero ".env"
app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});