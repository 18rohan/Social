import React, {useState} from "react";
import '../css/LoginCss.css'

import {IoIosMenu,IoIosContact} from "react-icons/io"
import {AiFillLock,AiOutlineUser,AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";


import {Auth} from "aws-amplify";
import MainPage from "./MainPage"
import Signup from './SignupPage';

// import NavBar from "./Components/NavBar";
// import HeaderBar from "./Components/HeaderBar";
// import TopBar from "./Components/TopBar";
// import Card from "./Components/Card";
// import MediumCard from "./Components/MediumCard";
// import BigCard from "./Components/BigCard";




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      username:'',
      password:'',
      SignedIn:false,
      
    }


}


onSubmit = (e) =>{
  e.preventDefault();
  const {SignedIn,username, password} = this.state;
  if(!SignedIn){
    Auth.signIn({
    username: username,
    password: password,
   
    
  }).then(()=>console.log("Signed in"))
    .catch((error)=>console.log(error))
    this.setState({SignedIn:true})

  }else{
    Auth.confirmSignIn(username)
    .then(()=>console.log('Sign up Confirmed!!'))
    .catch(err => console.log(err));
  }
  

}
handleChange = (e) =>{
  this.setState({
    [e.target.name] : [e.target.value]
  })
  
}
 
  render(){

  const {SignedIn} = this.state;
  if(SignedIn){
    return (
      <div>
      <MainPage />
      </div>
      );

  }else{
    return (
           <form onSubmit={this.onSubmit}>
    <div className="LoginPage">
      <div className="LoginForm"> 
        <h1>Instagram</h1>
        <h2>Sign In</h2>
        <div className="InputFieldContainer">

            <div className="UsernameContainer">
              <a><AiOutlineUser /></a>
              <div className="InputField">
                  <input 
                  style={{width:290, height:47, borderWidth:0}} 
                  placeholder="Username" 
                  name = "username"
                  
                  handleChange = {this.handleChange}
                  />
              </div>
            </div>

            <div className="PasswordContainer">
              <a><RiLockPasswordLine /></a>
              <div className="InputField">
                  <input 
                    style={{width:290, height:47, borderWidth:0}} 
                    type='password'
                    placeholder="Password"
                    name="password1"
                    
                    handleChange={this.handleChange}
                    />
              </div>
            </div>
            
          

            

        </div>

        <button class="SubmitButton" type="submit"  onClick={this.props.onclick}>
        <p>SIGN IN</p>
        </button>

        
          <div>

          <p>Don't have an account <a style={{color: 'blue'}} href="Login" >Sign up</a> </p>
          </div>

      </div>
    </div>

     </form> 
      );
  }

}
};
export default Login;




