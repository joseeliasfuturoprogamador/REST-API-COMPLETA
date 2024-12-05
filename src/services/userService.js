const User = require('../models/UsuariosSechema');

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Erro ao buscar usuários: ' + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUserById = async (id, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
