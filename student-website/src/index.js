import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
// import {Br}
import {BrowserRouter as Router} from "react-router-dom"
import store from "./store"

window.store=store;

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
 ,
  document.getElementById('root')
);

reportWebVitals();
