const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

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