const express=require("express")
const app=express();
const mongoose=require("mongoose")
const env=require("dotenv")
const studentRouter=require("./Routes/student");
const teacherRouter=require("./Routes/teacher");
const resultRouter=require("./Routes/result");
const classRouter=require("./Routes/class");


var cors = require('cors')
app.use(cors())

env.config();
app.use(express.json());
app.use("/api",studentRouter);
app.use("/api",teacherRouter);
app.use("/api",resultRouter);
app.use("/api",classRouter);

// database


mongoose.set('useFindAndModify', false);


mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.h2vgn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {useNewUrlParser:true,useUnifiedTopology: true,
        useCreateIndex:true
    }).then(()=>{
    console.log("database connected");
});



app.listen(5000,()=>
{
    console.log("server stated at 5000");
})
