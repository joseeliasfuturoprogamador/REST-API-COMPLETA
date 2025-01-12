const express = require("express");
const connect = require("./database/conection");
const userRoutes = require('./routes/userRoutes');
const cors = require("cors"); 


const app = express();
connect();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes); 

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
