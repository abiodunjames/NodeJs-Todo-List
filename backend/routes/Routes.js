const express = require('express');
const app = express.Router();
const repository = require('../models/respositories/TodoRepository');

// get all todo items in the db
app.get('/', (req, res) => {
  const todos = repository.findAll();
  res.json(todos);
});

// add a todo item
app.post('/', (req, res) => {
  const { name } = req.body;
  const results = repository.create(name);
  res.status(200).json(results);
});


// delete a todo item
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id);
  res.json('Successfully removed');
});

// update a todo item
app.post('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { name: req.body.name, done: req.body.done };
  const result = repository.updateById(id, todo);
  res.status(200).json(result);
});
module.exports = app;
