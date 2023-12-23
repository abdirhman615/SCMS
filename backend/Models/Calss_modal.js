const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
Classname:{
    type:String,
    required:true
}
},{timestamps:true})

const ClassModal = mongoose.model("Class",ClassSchema)

module.exports=ClassModal

