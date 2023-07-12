const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
category:{
    type:[String],
    required: true,
}
});

// Compile model from schema
module.exports = Category = mongoose.model("CategorySchema", CategorySchema);