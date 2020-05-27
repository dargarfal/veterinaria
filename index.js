const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//habilitar Cors para comunicacion entre servidores y restringiendo dominio
app.use(cors()); //-> De esta manera es de acceso publico

//De esta otra forma se restrinje solo el acceso a: http://locahost:30000
const whitelist = ['http://localhost:3000']; //se pueden agregar otros dominios
const corsOptions = {
  origin: (origin, callback) => {
    const existe =  whitelist.some( dominio => dominio === origin);
    if(existe){
      callback(null, true)
    }else{
      callback(new Error('No Permitido por CORS'))
    }
  }
}

//app.use(cors(corsOptions));

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