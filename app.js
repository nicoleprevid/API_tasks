const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const app = express();
const port =  25000

// Middleware de análise de solicitações JSON
app.use(express.json());
const banco = "mongodb+srv://nickprevid:1234@cluster0.09n1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log('Conectando ao banco de dados...');
mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao banco de dados!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  });

// Middleware de rota para as APIs de tarefas
app.use('/api/todos', todoRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Tarefas!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
});

