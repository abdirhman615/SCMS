const mongoose = require("mongoose")

const FacultySchema = new mongoose.Schema({
Facultyname:{
    type:String,
    required:true
},
Creationdate:{
    type:String,
    required:true
}
},{timestamps:true})

const FacultyModal = mongoose.model("Faculty",FacultySchema)

module.exports=FacultyModal

