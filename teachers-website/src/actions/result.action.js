import axios from "../helper"
export const resultPost=(body)=>
{
    return async dispatch=>
    {
        const data=await axios.post("/result/create",body);
        console.log(data);
        if(data.status==201)
        {
            console.log("successfull submited");
        }
        else if(data.status==200)
        {
            console.log("already axist");
        }
    }
}