const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Rota para obter todas as tarefas
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter tarefas.' });
  }
});

// Rota para adicionar uma nova tarefa
router.post('/', async (req, res) => {
  const { task } = req.body;

  try {
    const newTodo = await Todo.create({ task });
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar tarefa.' });
  }
});

// Rota para marcar uma tarefa como concluída
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao marcar tarefa como concluída.' });
  }
});

// Rota para excluir uma tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Tarefa excluída com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir tarefa.' });
  }
});

module.exports = router;
