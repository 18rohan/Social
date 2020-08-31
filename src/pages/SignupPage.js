import React, {useState} from "react";

import {IoIosMenu,IoIosContact} from "react-icons/io"
import {AiFillLock,AiOutlineUser,AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";

import '../css/LoginCss.css';
import {Auth} from "aws-amplify";

// import NavBar from "./Components/NavBar";
// import HeaderBar from "./Components/HeaderBar";
// import TopBar from "./Components/TopBar";
// import Card from "./Components/Card";
// import MediumCard from "./Components/MediumCard";
// import BigCard from "./Components/BigCard";




class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      username:'',
      password:'',
      email:'',
      confirmationCode:'',
      phone_number:'',
      SignedUp:false,
      userSignedUp:false
      
  
    }


}
handleToggle = () =>{
  const {SignedUp} = this.state;
  this.setState({SignedUp:!SignedUp});
}

onSubmit = (e) =>{
  e.preventDefault();
  const {SignedUp,username, password, email, phone_number, confirmationCode} = this.state;

  if(!SignedUp){
      Auth.signUp({
    username: username,
    password: password,
    attributes: {
      email: email,
      phone_number: phone_number,   
    }
    
  }).then(()=>console.log("Signed up"))
    .catch((error)=>console.log(error))
    this.setState({SignedUp:true})

  }else{
    
     Auth.confirmSignUp(username, confirmationCode)
     .then(()=>console.log('Sign up Confirmed!!'))
    .catch(err => console.log(err));
  }
    

  
  

}
handleChange = (e) =>{
  this.setState({
    [e.target.name] : [e.target.value]
  });
  
}
 
  render(){
  const {SignedUp} = this.state;
  if(SignedUp){
    return (
          <form onSubmit={this.onSubmit}>
    <div className="LoginPage">
      <div className="LoginForm"> 
        <h1>Instagram</h1>
        <h2>Sign up</h2>
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
                    type='text'
                    placeholder="Confirmation Code"
                    name="confirmationCode"
                    
                    handleChange={this.handleChange}
                    />
              </div>
            </div>
      
            

        </div>

        <button class="SubmitButton" type="submit"  onClick={this.props.onclick}>
        <p>SIGN UP</p>
        </button>

        
          <div>

          <p>Already have an account? <a style={{color: 'blue'}} href="Login" >Signin</a> </p>
          </div>

      </div>
    </div>

     </form> 

      );
      
  }else{
    return (
           <form onSubmit={this.onSubmit}>
    <div className="LoginPage">
      <div className="LoginForm"> 
        <h1>Instagram</h1>
        <h2>Sign up</h2>
        <div className="InputFieldContainer">

            <div className="PasswordContainer">
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
                    name="password"
                    
                    handleChange={this.handleChange}
                    />
              </div>
            </div>
            
            <div className="PasswordContainer">
              <a><AiOutlineMail /></a>
              <div className="InputField">
                  <input 
                  style={{width:290, height:47, borderWidth:0}} 
                  placeholder="Enter email" 
                  name="email"
                  
                  handleChange={this.handleChange}
                   />
              </div>
            </div>

            <div className="PasswordContainer">
              <a><AiOutlinePhone /></a>
              <div className="InputField">
                  <input 
                  style={{width:290, height:47, borderWidth:0}} 
                  placeholder="Enter phone number" 
                  name="phone_number"

                  handleChange={this.handleChange}
                   />
              </div>
            </div>
            
            


            

        </div>

        <button class="SubmitButton" type="submit"  onClick={this.onSubmit}>
        <p>SIGN UP</p>
        </button>

        
          <div>

          <p>Already have an account? <a style={{color: 'blue'}} href="Login" onClick={this.handleToggle} >Sign in</a> </p>
          </div>

      </div>
    </div>

     </form> 
      );
  }

}
};
export default Signup;




  