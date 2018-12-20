const mongoose =require('mongoose');
const Schema =mongoose.Schema;


const userDetailsSchema= new Schema({
  name:{type:String,required:true,max:[128, 'Too long, max is 128 characters']},

})

//var UserDetails=mongoose.model('UserDetails',userDetailsSchema);
module.exports= mongoose.model('UserDetails',userDetailsSchema);
