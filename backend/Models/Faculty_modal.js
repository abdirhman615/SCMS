const mongoose = require("mongoose")
const createIdGenerator = () => {
    let counter = 0;
  
    return () => {
      counter += 1;
      return `ID_${counter}`;
    };
  };
const FacultySchema = new mongoose.Schema({
    counter:{
    type:String,
    required:false
},
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

