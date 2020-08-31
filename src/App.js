import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import MainPage from './pages/MainPage';

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render (){
    return (
        <div className="App">
          <Signup />
        </div>
    );  
  }
  
}

export default withAuthenticator(App,true);
