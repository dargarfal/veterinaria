const express = require('express');
const router = express.Router();
const  pacienteController = require('../controllers/pacienteController');
const usuarioController = require('../controllers/usarioController');

module.exports = function(){

  //Agregando nuevos pacientes
  router.post('/pacientes', pacienteController.nuevoCliente);

  router.get('/pacientes', pacienteController.getPacientes);

  router.get('/pacientes/:id', pacienteController.getOnePaciente);

  router.delete('/pacientes/:id', pacienteController.deleteOnePaciente);

  router.put('/pacientes/:id', pacienteController.updatePaciente);

  router.post('/usuarios', usuarioController.nuevoUsuario);

  router.get('/usuarios', usuarioController.getUsuarios);

  router.get('/usuarios/:id', usuarioController.getOneUsuario);

  router.put('/usuarios/:id', usuarioController.updateUsuario);

  router.delete('/usuarios/:id', usuarioController.deleteUsuario);
  
  return router;
}