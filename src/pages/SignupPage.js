import React, {useState} from "react";

import {IoIosMenu,IoIosContact} from "react-icons/io"
import {AiFillLock,AiOutlineUser,AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";

import '../css/SignUpCss.css';
import {Auth} from "aws-amplify";




const initialFormState = {
  username:'', password:'',email:'',authCode:'',formType:'signUp'
}

const SignUp = (props) => {

  return (
      <div className="LoginPage">
      <div className="LoginForm"> 
        <h1>Social</h1>
        <h2>Sign up</h2>
        <div className="InputFieldContainer">

            <div className="PasswordContainer">
              <a><AiOutlineUser /></a>
              <div className="InputField">
                  <input 
                  style={{width:290, height:47, borderWidth:0}} 
                  placeholder="Username" 
                  name = "username"
                  
                  onChange = {props.onChange}
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
                    
                    onChange={props.onChange}
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
                  
                  onChange={props.onChange}
                   />
              </div>
            </div>

       
            
            


            

        </div>

        <button class="SubmitButton" type="submit"  onClick={props.signUp}>
        <p>SIGN UP</p>
        </button>

        
          <div>

          <p>Already have an account? <a style={{color: 'blue'}} onClick={props.signIn}  >Sign in</a> </p>
          </div>

      </div>
    </div>
    );
}


export default SignUp;




  