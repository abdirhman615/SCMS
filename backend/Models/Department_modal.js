const mongoose = require("mongoose")

const departmentSchema = new mongoose.Schema({
departmentname:{
    type:String,
    required:true
},
Faculty_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Faculty",
    required:true
}
},{timestamps:true})

const departmentModal = mongoose.model("department",departmentSchema)

module.exports=departmentModal

