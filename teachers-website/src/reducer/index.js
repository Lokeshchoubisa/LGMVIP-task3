import authReducer from "./auth.reducer"
import { combineReducers } from "redux"
import studentReducer from "./student.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    students:studentReducer
})

export default rootReducer;