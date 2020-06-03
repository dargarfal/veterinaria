const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const usuarioSchema = new Schema({
  nombreRealUsario: {
    type: String,
    required: true
  },
  emailUsuario : {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  passUsuario: {
    type: String,
    required: true
  },
  fotoUsario: {
    type: String,
    trim: true
  },
  creadoUsuario: {
    type: Date,
    default: Date.now()
  },
  ultimoLoginUsuario: {
    type: Date,
    default: Date.now()
  },
  rolUsuario: {
    type: String,
    defult: 'development',
    enum: [
      'development',
      'administrador'
    ]
  }
});

//Utilizamos un Hook de mongosse para ejecutar una funcion antes que se ejecute el metodo save()

usuarioSchema.pre('save', function(next){
  bcrypt.genSalt(10)
    .then(salts => {
      bcrypt.hash(this.passUsuario, salts)
        .then(hash => {
          this.passUsuario = hash;
          next();
        })
        .catch(error => next(error));
    })
    .catch(error => next(error));
});

module.exports = mongoose.model('Usuario', usuarioSchema);