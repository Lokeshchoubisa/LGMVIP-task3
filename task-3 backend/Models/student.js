const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const studentSchema=mongoose.Schema({
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
        default:"student",
        required:true
    }

},{timestamps:true});


studentSchema.virtual("fullName").get(function()
{
    return this.firstName+" "+this.lastName;
});






studentSchema.methods={
    authenticate:async function(password)
    {   
        return await bcrypt.compare(password,this.password);
    }
}


module.exports=mongoose.model("Student",studentSchema);