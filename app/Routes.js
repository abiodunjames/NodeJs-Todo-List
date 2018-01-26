'use strict'

var express = require('express')

var todoRoutes = express.Router()

var Todo = require('./Todo')

// get all todo items in the db

todoRoutes.route('/all').get(function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) {
      return next(new Error(err))
    }

    res.json(todos) // return all todos
  })
})

// add a todo item
todoRoutes.route('/add').post(function (req, res) {
  Todo.create(
    {
      name: req.body.name,
      done: false
    },
    function (error, todo) {
      if (error) {
        res.status(400).send('Unable to create todo list')
      }
      res.status(200).json(todo)
    }
  )
})

// delete a todo item

todoRoutes.route('/delete/:id').get(function (req, res, next) {
  var id = req.params.id
  Todo.findByIdAndRemove(id, function (err, todo) {
    if (err) {
      return next(new Error('Todo was not found'))
    }
    res.json('Successfully removed')
  })
})

// update a todo item

todoRoutes.route('/update/:id').post(function (req, res, next) {
  var id = req.params.id
  Todo.findById(id, function (error, todo) {
    if (error) {
      return next(new Error('Todo was not found'))
    } else {
      todo.name = req.body.name
      todo.done = req.body.done

      todo.save({
        function (error, todo) {
          if (error) {
            res.status(400).send('Unable to update todo')
          } else {
            res.status(200).json(todo)
          }
        }
      })
    }
  })
})

module.exports = todoRoutes
