const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const JobSchema = new Schema({
jobType:{
    type:String,
    required: true,
} ,
description:{
    type:String,
    required: true,
} ,
address:{
    type:String,
    required: true,
},
countworker:{
    type:Number,
    required: true,
} ,
requiements:{
   type:Boolean,
   required:true 
},
confirmed:{
    type:Schema.Types.ObjectId
},
sugglist:{
    type:[Schema.Types.ObjectId]
},
publisher:{
    type:Schema.Types.ObjectId
},
status:{
    type:String,
    required:true
},
date: { type: Date, default: Date.now },
options : [{
    days : Number,
    applicant : String,
    applicantName:String,
    availability:Boolean,
    description:String,
    productsrequired:[String],
     }]
});

// Compile model from schema
module.exports = Job = mongoose.model("JobSchema", JobSchema);