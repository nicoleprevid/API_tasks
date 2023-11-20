const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  // Adicione mais campos, se necessário
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
