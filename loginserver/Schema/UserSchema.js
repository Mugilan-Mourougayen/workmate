const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
email:{
    type:String,
    required: true,
} ,
name:{
    type:String,
    required: true,
} ,
password:{
    type:String,
    required: true,
},
role:{
    type:String,
} ,


});

// Compile model from schema
module.exports = User = mongoose.model("UserSchema", UserSchema);