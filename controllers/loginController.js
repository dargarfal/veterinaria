const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const CONFIG = require('../config/config');

const jwt = require('jsonwebtoken');

exports.loginUsuario = async (req, res, next) => {
  const email = req.body.email;
  let pass = req.body.pass;

  const usuario = await Usuario.findOne({emailUsuario : email});

  if(usuario){
    const match = await bcrypt.compare(pass, usuario.passUsuario);

    if(match){
      const payload = {
        nombreRealUsario : usuario.nombreRealUsario,
        emailUsuario : usuario.emailUsuario,
        rolUsuario : usuario.rolUsuario
      }
      //Acceso
      jwt.sign(payload, CONFIG.SECRET_TOKEN, (error, token) => {
        if(error){
          res.status(500).send(error);
        }else{
          res.status(200).send({mensaje: 'Acceso', token});
        }
      })
    }else{
      res.status(200).json({mensaje: 'Constraseña incorrecta!!!'});
    }
  }else{
    res.status(404).json({mensaje: 'El usuario no existe!!!'});
  }

  // Variante con Promise
  /*if(usuario){
    bcrypt.compare(pass, usuario.passUsuario)
      .then(match => {
        if(match){
          res.status(200).json(usuario);
        }else{
          res.status(404).json({mensaje: 'Constraseña incorrecta!!!'});
        }
      })
      .catch(error => res.status(500).send(error));
  }else{
    res.status(404).json({mensaje: 'El usuario no existe!!!'});
  }*/
}