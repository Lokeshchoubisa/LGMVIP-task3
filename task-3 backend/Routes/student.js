const express=require("express")
const Router=express.Router();
const Student=require("../Models/student")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
// const jwt=require("json")
// const env=require("dotenv")
// env.config();



Router.post("/student/signin",(req,res)=>
{
    const {email,password}=req.body;


    Student.findOne({email},async (err,student)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        if(student)
        {
            
            const verify=await student.authenticate(password);
            if(verify)
            {
                const token=await jwt.sign({student:student._id,role:student.role},process.env.JWT_SECRET,{expiresIn:"1y"});
                return res.status(201).json({
                    token,
                    student
                })
            }
            else
            {
                return res.status(400).json({error:"password wrong"})
            }
        }
        else
        {
            return res.status(400).json({error:"Student not found"})
        }
    })





})









Router.post("/student/signup",(req,res)=>
{
    console.log(req.body);
    const {firstName,lastName,email,password}=req.body;

    Student.findOne({email:email},async (err,student)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        if(student)
        {
            return res.status(200).json({
                error:"student already exist"
            })
        }
        else
        {
            const student=new Student({
                firstName,lastName,email,password
            })
            student.password = await bcrypt.hash(password,10);
            student.save((err,data)=>
            {
                
                if(err)
                {
                    return res.status(400).json({error:err})
                }
                if(data)
                {

                
                return res.status(201).json({
                    student
                })
             }
             else
             {
                 return res.status(400).json({error:"no data saved"});
             }
            })
        }
       

        

    })





})


Router.get("/student/allstudent",(req,res)=>
{
    Student.find({},(err,students)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        else
        {
            return res.status(201).json({students})
        }
    })
})

module.exports=Router;
