const jwt=require("jsonwebtoken")

exports.isTeacher=async (req,res,next)=>
{
    console.log(req.headers.authorization);
    if(req.headers.authorization)
    {
        const token=req.headers.authorization.split(" ")[1];
        console.log(token);
        const data=await jwt.verify(token,process.env.JWT_SECRET);
        console.log(data);
        if(data.role=="teacher")
        {
            req.teacher=data;
            next();
        }
        else
        {
            return res.status(400).json({
                error:"Person is not teacher"
            })
        }
    }
    else
    {
        return res.status(500).json({
            error:"no token provided"
        })
    }
    
   
  
    


};