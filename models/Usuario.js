const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

  nombreRealUsario: {
    type: String,
  },
  emailUsuario : {
    type: String,
    trim: true
  },
  passUsuario: {
    type: String
  },
  fotoUsario: {
    type: String,
    trim: true
  },
  creadoUsuario: {
    type: String,
    trim: true
  },
  rolUsuario: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);