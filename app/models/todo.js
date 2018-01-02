//Todo Model
var mongoose =require('mongoose');

//Define collection and schem for Items

var todo =new mongoose.Schema({
    name: {
        type:String,
    },
    done: {
        type:Boolean
    }
},
 {
     collection: 'todos'
 }
);

/*module.exports =monogoose.model('Todo',{
    text:String,
    done:Boolean
});*/

module.exports= mongoose.model('Todo',todo);