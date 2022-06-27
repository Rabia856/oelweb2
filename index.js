const express = require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const app= express()

const EmployeeModel= require("./models/Employee");

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017',{
    useNewURLParser:true,
});

app.post("/insert",async (req, res)=> {
    const fname=req.body.fname;
    const lname=req.body.lname;
    const job=req.body.job;
    const mail=req.body.mail;
    const contact=req.body.contact;

    const employee= new EmployeeModel({ fname:fname,lname:lname , job:job, mail:mail, contact:contact});

    try{
        await employee.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
})


app.get("/read",async (req, res)=> {
    EmployeeModel.find({},(err,result)=>{
        if(err){
            res.send(err);
         }
         res.send(result);
        
    })
})


// app.put("/update",async (req, res)=> {
//     const newFoodName=req.body.newFoodName;
//     const id=req.body.id;

//     try{
//         await FoodModel.findById(id,(err,updatedFood)=>{
//             updatedFood.foodName= newFoodName;
//             updatedFood.save();
//             res.send("update");
//         })
//     }catch(err){
//         console.log(err);
//     }
// })



// app.delete("/delete/:id",async (req, res)=> {
//    const id= req.params.id;
//    await FoodModel.findByIdAndRemove(id).exec();
//    res.send("deleted");
// })


app.listen(3001, () => {
    console.log("Server running");
})