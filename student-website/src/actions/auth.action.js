import axios from "../helper"
import { authConstants } from "./constant";


export const login=(user)=>
{
    return async dispatch=>
    {
        const data=await axios.post("/student/signin",user);
        if(data.status==201)
        {
            console.log("success");
            console.log(data);
            window.data=data;
            localStorage.setItem("token",data.data.token)
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:data.data
            })
            
        }
    }
}

