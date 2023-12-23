const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
Stdname:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
Address:{
    type:String,
    required:true
},
Password:{
    type:String,
    required:true
},
Gender:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
},
department_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"department",
    required:true
},
Class_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Class",
    required:true
}
},{timestamps:true})

const StudentModal = mongoose.model("Student",StudentSchema)

module.exports=StudentModal

