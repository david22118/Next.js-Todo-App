const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DetailSchema  = new Schema({
   name:String,
   isDone:Boolean,
   taskId: String
});

const Detail = mongoose.model("Detail", DetailSchema);

module.exports=Detail