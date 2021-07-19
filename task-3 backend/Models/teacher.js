const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const teacherSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:
    {
        type:String,
        required:true,
        trim:true
    },
    email:
    {
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:
    {
        type:String,
        default:"teacher",
        required:true
    }

},{timestamps:true});


teacherSchema.virtual("fullName").get(function()
{
    return this.firstName+" "+this.lastName;
});






teacherSchema.methods={
    authenticate:async function(password)
    {   
        return await bcrypt.compare(password,this.password);
    }
}


module.exports=mongoose.model("Teacher",teacherSchema);