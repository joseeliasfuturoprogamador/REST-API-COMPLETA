const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true, minlength: 6 },
  idade: { type: Number, min: 0, max: 120 },
  cpf: { type: String, minlength: 11, maxlength: 11 }, 
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
