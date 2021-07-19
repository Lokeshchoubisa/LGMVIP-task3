import { getAllStudent, login } from './actions/student.action';
import './App.css';
import Header from "../src/components/Header"
import Sidebar from "../src/components/Layout"
import { useDispatch, useSelector } from 'react-redux';
import Signin from './container/Signin';
import Home from './container/Home';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom"
import Result from './container/Result';
import PrivateRoutes from './components/PrivateRoute';




function App() {

  const dispatch = useDispatch();
  // dispatch(login());
  dispatch(getAllStudent());
  const auth = useSelector(state => state.auth);
  const token=localStorage.getItem("token");
  // if(token)
  // {
  //   dispatch(()=>{
  //     return dispatch=>
  //     {

  //     }
  //   })
  // }
  return (
    <div className="App">
    {/* <Header />
    <Sidebar sidebar/> */}
    {/* {auth.authenticate ? <Home /> : <Signin /> } */}
    <Switch>
      <PrivateRoutes path="/" exact component={Home} /> 
     
      <PrivateRoutes path="/result" exact component={Result} />
      {/* <Route path="/result" exact component={Result} /> */}
      <Route path="/signin" exact component={Signin} /> 
      
    
    </Switch>
    
    </div>
  );
}

export default App;
