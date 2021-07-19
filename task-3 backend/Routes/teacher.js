const express=require("express")
const Router=express.Router();
const Teacher=require("../Models/teacher")
const bcrypt=require("bcrypt")


// const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


Router.post("/teacher/signin",(req,res)=>
{
    const {email,password}=req.body;
    console.log(req.body);

    Teacher.findOne({email},async (err,teacher)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        if(teacher)
        {
            
            const verify=await teacher.authenticate(password);
            if(verify)
            {
                const token=await jwt.sign({teacher:teacher._id,role:teacher.role},process.env.JWT_SECRET,{expiresIn:"1y"});
                return res.status(201).json({
                    token,
                    teacher
                })
            }
            else
            {
                return res.status(400).json({error:"password wrong"})
            }
        }
        else
        {
            return res.status(400).json({error:"teacher not found"})
        }
    })





})













Router.post("/teacher/signup",(req,res)=>
{
    console.log(req.body);
    const {firstName,lastName,email,password}=req.body;

    Teacher.findOne({email:email},async (err,teacher)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        if(teacher)
        {
            return res.status(200).json({
                error:"teacher already exist"
            })
        }
        else
        {
            const teacher=new Teacher({
                firstName,lastName,email,password
            })
            teacher.password = await bcrypt.hash(password,10);
            teacher.save((err,data)=>
            {
                
                if(err)
                {
                    return res.status(400).json({error:err})
                }
                if(data)
                {

                
                return res.status(201).json({
                    teacher
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

module.exports=Router;
