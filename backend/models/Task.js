const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TaskSchema  = new Schema({
   name:String,
   startDate:Date,  
   lastUpdate:Date,
  
});

const Task = mongoose.model("Task", TaskSchema);

module.exports=Task