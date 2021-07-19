import react from "react"
import axios from "../helper"
import { useDispatch,useSelector } from 'react-redux'
import { resultConstants } from "./constant"

export const resultPost=(body)=>
{
    
    return async dispatch=>
    {
        const data=await axios.post("/result",body);
        console.log(data);
        if(data.status==201)
        {
            console.log(data);
            dispatch(
                {
                    type:resultConstants.GET_RESULT_SUCCESS, 
                    payload:data.data.result
                }
            )
        }
        else if(data.status==200)
        {
            console.log("already axist");
        }
    }
}