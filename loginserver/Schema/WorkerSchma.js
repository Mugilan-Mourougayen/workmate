const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
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
specialization:{
    type:[String],
}

});

// Compile model from schema
module.exports = Worker = mongoose.model("WorkerSchema", WorkerSchema);