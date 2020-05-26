const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const pacientesSchema = new Schema({
  nombre: {
    type: String,
    trim: true
  },
  propietario: {
    type: String,
    trim: true
  },
  fecha: {
    type: String,
    trim: true
  },
  hora: {
    ype: String,
    trim: true
  },
  sintomas: {
    ype: String,
    trim: true
  }

});

module.exports = mongoose.model('Paciente', pacientesSchema);