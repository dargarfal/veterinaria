const Usuario = require('../models/Usuario');

//Crear un nuevo usuario
exports.nuevoUsuario = async (req, res, next) => {

  const usuario = new Usuario(req.body);
  
  try {
    await usuario.save();
    res.status(200).json({mensaje : 'Usuario creado'});
  } catch (error) {
    res.status(406).json(error);
    next();
  }
}

//Obtener todos los usuarios
exports.getUsuarios =  async (req, res, next) => {

  try {
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(406).json(error);
    next();
  }
}

//Obtener un usuario por el ID
exports.getOneUsuario = async (req, res, next) => {

  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(406).json(error);
    next();
  }
}

//Actualizar usuario
exports.updateUsuario = async (req, res, next) => {

  const usuario = new Usuario(req.body);

  try {
    const usuarioUpdate = await Usuario.findByIdAndUpdate(
    {_id : req.params.id}, req.body, { new: true});

      res.json(usuarioUpdate);
      
  } catch (error) {
    console.log(error);
    next();
  }
}

//Eliminar usuario
exports.deleteUsuario = async (req, res, next) => {


  try {
    const usuariodelete = await Usuario.findByIdAndDelete({_id: req.params.id});
    res.status(201).json({mensaje : 'Usuario eliminado'});
    
  } catch (error) {
    res.status(406).json(error);
    next();
  }
}