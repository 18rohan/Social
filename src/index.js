import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Amplify, { Auth } from 'aws-amplify';
import config from './aws-exports';

import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';

Amplify.configure(config);

// const routing = (
//   <Router>
    
//       <Route exact path="/" component={App} />
      
//       <Route exact path="/signIn" component={Login} />
//       <Route path="/Signup" component={SignUp} />
      
    
//   </Router>
// )


ReactDOM.render(
 <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
