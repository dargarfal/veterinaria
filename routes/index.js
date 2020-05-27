const express = require('express');
const router = express.Router();
const  pacienteController = require('../controllers/pacienteController');

module.exports = function(){

  //Agregando nuevos pacientes
  router.post('/pacientes', pacienteController.nuevoCliente);

  router.get('/pacientes', pacienteController.getPacientes);

  router.get('/pacientes/:id', pacienteController.getOnePaciente);

  router.delete('/pacientes/:id', pacienteController.deleteOnePaciente);

  router.put('/pacientes/:id', pacienteController.updatePaciente);
  
  return router;
}