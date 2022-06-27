const mongoose= require('mongoose');

const EmployeeSchema= new mongoose.Schema({
    fName:{
        type:String,
        required: true,
    },
    lName:{
        type:String,
        required: true,
    },
    job:{
        type:String,
        required:true,
    },
    mail:{
        type:Number,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    }
});

const Employee = mongoose.model("Employee",EmployeeSchema)
module.exports=Employee;