var mongoose = require('mongoose')

// Define collection and schema for todo Item

var todo = new mongoose.Schema({
  name: {
    type: String
  },

  done: {
    type: Boolean
  }
},

  {
    collection: 'todos'
  }
)

module.exports = mongoose.model('Todo', todo);