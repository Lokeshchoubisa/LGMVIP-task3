import axios from "axios"
import store from "../store"
// import { api } from '../urlConfig';

const api="http://localhost:5000/api";

// import { authConstants } from '../actions/constants';

const token=localStorage.getItem("token");
console.log("authorization for axios is called");


const axiosinstance=axios.create(
    {
        baseURL:api,
        headers:{
            "Authorization":token ? ('Bearer '+token) :"",
        }
    }
);

export default axiosinstance;