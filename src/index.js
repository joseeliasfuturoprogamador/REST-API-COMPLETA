const express = require("express");
const app = express();
const PORT = 3000;

// Carregar variáveis de ambiente
require("dotenv").config();

// Importar a conexão com o banco de dados
require("./database/conection");

app.get('/', async (req, res) => {
  return res.status(200).json({ message: "API rodando com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
