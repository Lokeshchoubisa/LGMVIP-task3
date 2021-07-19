
import { authConstants } from "../actions/constant";

const initState={
    authenticate:false,
    token:"",
    myData:{}
}

export default (state=initState,action)=>
{
    switch(action.type)
    {
        case authConstants.LOGIN_SUCCESS:
            state={
                ...initState,
                token:action.payload.token,
                myData:action.payload.student,
                authenticate:true
            }
            break;
        default:
            state=state;
    }
    return state;
}