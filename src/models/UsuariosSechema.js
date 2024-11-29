const mongoose  = require ('mongoose')


const usuarioSechema = new mongoose.Schema ({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    senha: { type: String, required: true, minlength: 6},
    idade: { type: Number, min: 0, max: 120},
    cpf: { type: Number, min: 11, max: 11},
});    
