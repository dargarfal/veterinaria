
const Paciente = require('../models/Paciente');
//Cuando se crea un nuevo cliente

exports.nuevoCliente = async (req, res, next) => {
  //TODO: insertar en la DB
  //console.log(req.body);
  //Crear objeto de pacientes
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje : 'El cliente se agrego correctamente'});
  } catch (error) {
    console.log(error);
    next();
  }
}

exports.getPacientes = async (req, res, next) => {
  
  try {
    const getpacientes = await Paciente.find({});
    res.json(getpacientes);
    
  } catch (error) {
    console.log(error);
    next();    
  }
}

//ObjectId("5ecccae75763a0fa8d8e391d")
exports.getOnePaciente = async(req, res, next) => {

  try {
    const pacienteOne = await Paciente.findById(req.params.id);
    res.json(pacienteOne);
  } catch (error) {
    console.log(error);
    next();
  }
}

exports.deleteOnePaciente = async (req, res, next) => {
  
  try {
    const pacienteEliminado = await Paciente.findById(req.params.id);
    const pacienteDelete = await Paciente.findByIdAndDelete(req.params.id);
    console.log(pacienteDelete);
    res.json(pacienteEliminado);
  } catch (error) {
    console.log(error);
    next();    
  }
}

exports.updatePaciente = async (req, res, next) => {

  const paciente = new Paciente(req.body);

  try {
    const pacienteUpdate = await Paciente.findByIdAndUpdate(
                                  {_id : req.params.id}, req.body, { new: true});

      res.json(pacienteUpdate);
      
  } catch (error) {
    console.log(error);
    next();
  }
}