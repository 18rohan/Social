import React, {useState} from "react";
import '../css/MainPageCss.css';

import HeaderBar from "../components/HeaderBar";
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import BigCard from "../components/Card_posts.js";

import { IoMdSend, IoMdPaperPlane } from "react-icons/io";
import {AiFillHome,AiOutlineHome,AiOutlineHeart} from "react-icons/ai";
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {ImSwitch} from 'react-icons/im';
// import { AmplifySignOut } from '@aws-amplify/ui-react';



// import "../App.css";
// import {Auth} from "aws-amplify";

const MainPage = (props) => {
  const [LoggedOut, setLogout] = useState(false);
 const handleLogout = () =>{
  Auth.signOut()
  .then(()=>console.log('Logged out!!'))
  .catch((error) =>console.log(error));

  setLogout(true);
 }

  return (
    
    <div className="App">
      
      <div className="HeaderBar">
        <h1>Social</h1>
        
        <div className="IconTray">
          <h2><AiOutlineHome/></h2>
          <h2><IoMdPaperPlane /></h2>
          <h2><RiCompassDiscoverLine /></h2>
          <h2><AiOutlineHeart /></h2>
          <h2 ><ImSwitch onClick={props.logout}/></h2>
          
        </div>

        
        
      </div>
      <div className="Layout">
        <div className="ContentLayout">
          <div className="StoryBar">
          <p>Stories...</p>
          </div>
          <div className="PostLayout">
          <BigCard />
          <BigCard />
          <BigCard />
          </div>
        </div>
      </div>
      <div className="Footer">
      <p></p>
      </div>
      </div>
  

      
  );
};

export default MainPage;




