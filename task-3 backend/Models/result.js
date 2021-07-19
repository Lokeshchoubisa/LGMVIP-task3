const mongoose=require("mongoose")
const Student=require("./student")

const resultSchema=mongoose.Schema({

    student:{type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true},
    status:{
        type:Boolean,
        default:true,
        required:true
    },
    marks:[
        {
            subjectName:{
                type:String,
            required:true},
            totalMarks:{
                type:Number,
                required:true
            },
            gotMarks:{
                type:Number,
                required:true
            }
        }
    ]
    





},{timestamps:true})


module.exports=mongoose.model("Result",resultSchema);