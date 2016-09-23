var mongoose=require("mongoose");
var Schema=mongoose.Schema;


var condition=new Schema({
  wavename:String,
  wavetype:String,
  location:String,
  noofparticipant:Number,
  plannedstartdate:String,
  plannedenddate:String,
  

});

module.exports=mongoose.model('condition',condition);
