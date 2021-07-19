import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom"
import Home from '../../container/Home';
export default function PrivateRoutes({component:Component,...rest}) {
    // console.log(rest);
    const auth = useSelector(state => state.auth)
    
    return (
        <Route {...rest} component={(props)=>
        {
            // const token=window.localStorage.getItem("token");

            if(auth.authenticate)
            {
                return <Component {...props} />
            }
            else
            {
                return <Redirect to="/signin" />
            }
        }}  />
    )
}
