import { resultConstants, studentConstants } from "../actions/constant"

const initState={
    result:{}
}


export default (state=initState,action)=>
{
    switch(action.type)
    {
        case resultConstants.GET_RESULT_SUCCESS:
            state={
                result:action.payload
            }
            // state=state;
            break;
        default:
            state=initState;

    }
    return state;
}