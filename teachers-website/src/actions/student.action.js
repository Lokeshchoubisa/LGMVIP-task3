import axios from "../helper"
import { studentConstants } from "./constant";

export const getAllStudent=()=>
{
    return async dispatch=>
    {
        const data=await axios.get("/student/allstudent");
        if(data.status==201)
        {
            console.log(data.data.students);
            // window.data=data;
            dispatch({
                type:studentConstants.GET_ALL_STUDENT_SUCCESS,
                payload:data.data.students
            })
        }
    }
}
