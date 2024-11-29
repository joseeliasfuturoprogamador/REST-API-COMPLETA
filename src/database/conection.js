require("dotenv").config();
const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;   

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.angh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Conexão feita com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no banco de dados:", err));
};

connect();
 
module.exports = mongoose;
