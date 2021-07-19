const express=require("express")
const Router=express.Router();
const Result=require("../Models/result")
const {isTeacher}=require("../common_middleware/middleware")

Router.post("/result/create",(req,res)=>
{
    console.log(req.body);
    const {student,marks,status}=req.body;

    Result.findOne({student:student},(err,result)=>
    {
        if(err)
        {
            return res.status(400).json({error:err})
        }
        if(result)
        {
            return res.status(200).json({error:"result already exist"});
        }
        else
        {
            const result=new Result({
                student,marks,status
            });
            result.save((err,data)=>
            {
                if(err)
                {
                    return res.status(400).json({error:err})
                }
                if(data)
                {
                    return res.status(201).json({result:data})
                }
            })


        }
    })

})


Router.post("/result",(req,res)=>
{
    const {student}=req.body;

    Result.findOne({student:student}).populate("student").exec((err,result)=>
    {
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        if(result)
        {
            return res.status(201).json({
                result
            })
        }
        else
        {
            return res.status(200).json({
                error:"Result not declare yet"
            })
        }
    })

})


module.exports=Router;