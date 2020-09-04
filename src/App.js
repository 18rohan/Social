import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import MainPage from './pages/MainPage';
import ConfirmSignup from './pages/confirmSignup'

import {Auth, Hub} from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const initialFormState = {
  username:'', password:'',email:'',authCode:'',formType:'signUp'
}

const App = () =>{
  const [formState, setFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null)
  useEffect(()=>{
    checkUser() 
    setAuthListener()
  },[])
  const setAuthListener = async()=>{
    Hub.listen('auth', (data) => {
  switch (data.payload.event) {
  
    case 'signOut':
        console.log('user signed out data', data);
        setFormState(()=>({...formState, formType:'signUp'}))
        break;  

    default:
        break; 
  }
});
  }
  const checkUser = async() =>{
    try{
      const user = await Auth.currentAuthenticatedUser();
      console.log('user', user);
      updateUser(user);

    }catch (err){
      // updateUser(null)
    }
  }

  const onChange = (e) =>{
    e.persist();
    setFormState(() =>({...formState, [e.target.name]:e.target.value}))
  }

  const {formType} = formState

  const signUp = async() =>{
    const {username, password, email} = formState
    await Auth.signUp({username, password, attributes:{email}})
    setFormState(()=>({...formState, formType:"confirmSignUp"}))

  }
  const confirmSignUp = async() =>{
    const {username, authCode, formType} = formState
    await Auth.confirmSignUp(username, authCode);
    setFormState(()=>({...formState, formType:'signIn'}))
  }
  const signIn = async() =>{
   const {username, password} = formState
    await Auth.signIn(username, password);
    setFormState(()=>({...formState, formType:'signedIn'}))
  } 
  const logout = async() =>{
    await Auth.signOut();
    setFormState(()=>({...formState, formType:'signUp'}))
  }
  const signInPageRouting = async() =>{
   setFormState(()=>({...formState, formType:'signIn'}))
  }
  const signUpPageRouting = async() =>{
   setFormState(()=>({...formState, formType:'signUp'}))
  }
  console.log(formType)  
  
  
  return (
      <div className="App">
      {
        formType === 'signUp' && 
        (
          <Signup onChange = {onChange} signUp={signUp} signIn={signInPageRouting} />
          
          
          )
        
      }
      {
        formType === 'confirmSignUp' && 
        (
          <ConfirmSignup onChange={onChange} confirmSignUp={confirmSignUp} />
        
          )
        
      }
      {
        formType === 'signIn' && 
        (
          <Login onChange={onChange} signIn={signIn} signUp={signUpPageRouting  } />
          
          )
        
      }
      {
        formType === 'signedIn' && 
        (
          <div>
          <MainPage logout = {logout} />
        
          </div>
          )

      }

      
      </div>

    );
};



export default App;
