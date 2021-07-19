import authReducer from "./auth.reducer"
import { combineReducers } from "redux"
import resultReducer from "./result.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    result:resultReducer
})

export default rootReducer;