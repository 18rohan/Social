import React, {useState} from "react";
import '../css/LoginCss.css'

import {IoIosMenu,IoIosContact} from "react-icons/io"
import {AiFillLock,AiOutlineUser,AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";


import {Auth} from "aws-amplify";
import MainPage from "./MainPage"
import Signup from './SignupPage';




class ConfirmSignup extends React.Component {
  constructor(props) {
    super(props);
    
  
}

  render(){

  
    return (
           <div>
    <div className="LoginPage">
      <div className="LoginForm"> 
        <h1>Social</h1>
        <h2>Confirm SignUp</h2>
        <div className="InputFieldContainer">

         

            <div className="PasswordContainer">
              <a><RiLockPasswordLine /></a>
              <div className="InputField">
                  <input 
                    style={{width:290, height:47, borderWidth:0}} 
                    type='text'
                    placeholder="Password"
                    name="authCode"
                    
                    onChange={this.props.onChange}
                    />
              </div>
            </div>
            
          

            

        </div>

        <button class="SubmitButton" type="submit"  onClick={this.props.confirmSignUp}>
        <p>CONFIRM SIGN UP</p>
        </button>

        
          <div>

          <p>Don't have an account <a style={{color: 'blue'}} href="Login" >Sign up</a> </p>
          </div>

      </div>
    </div>

     </div>
      );
  

}
};
export default ConfirmSignup;




