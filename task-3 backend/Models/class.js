const mongoose=require("mongoose")
const Student=require("./student")
const Teacher=require("./teacher")

const classSchema=mongoose.Schema({

    className:{type:String,
        required:true,
        unique:true},
    classTeacher:{type:mongoose.Schema.Types.ObjectId,
            ref:"Teacher",
            required:true},
    students:[
        
            {type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
            required:true}
        
    ]
    
},{timestamps:true})


module.exports=mongoose.model("Class",classSchema);