import { studentConstants } from "../actions/constant"

const initState={
    students:[]
}


export default (state=initState,action)=>
{
    switch(action.type)
    {
        case studentConstants.GET_ALL_STUDENT_SUCCESS:
            state={
                students:action.payload
            }
            // state=state;
            break;
        default:
            state=initState;

    }
    return state;
}