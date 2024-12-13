const userService = require('../services/userService')
const User = require('../models/UsuariosSechema')

const createUser = async (req, res) => {
    const { cpf, name, idade, email } = req.body;

    if (!cpf || !name || !idade || !email) {
        return res.status(400).json({
            message: "Todos os campos são obrigatórios: CPF, name, idade e email"
        });
    }

    try {
        const { user } = await userService.createUser(req.body);
        res.status(201).json({ message: "Usuário criado com sucesso", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await userService.updateUserById(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ erro: error.message })
    }
};

const deleteUserById = async (req, res) => {
    try {
        await userService.deleteUserById(req.params.id);
        return res.status(200).json({message:  "Deletado com sucesso"});
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};




module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};