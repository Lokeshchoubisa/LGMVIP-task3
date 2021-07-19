const express=require("express")
const Router=express.Router();
const Class=require("../Models/class")
const slugify=require("slugify")
const {isTeacher}=require("../common_middleware/middleware")


Router.post("/class/create",isTeacher,(req,res)=>
{
    const {className,students,classTeacher}=req.body;
    console.log(req.body);
    
    
    Class.findOne({className:slugify(className)},(err,classId)=>
    {
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        if(classId)
        {
            return res.status(200).json({error:"class already exist"});
        }
        else
        {
            const classId=new Class({
                className:slugify(className),students,classTeacher
            })
            classId.save((err,data)=>
            {
                if(err)
                {
                    return res.status(400).json({
                        error:err
                    })
                }
                else
                {
                    return res.status(201).json({
                        class:classId
                    })
                }
            })
        }
    })







})

module.exports=Router;