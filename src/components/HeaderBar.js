import React from "react";
import { IoMdSend, IoMdPaperPlane } from "react-icons/io";
import {AiFillHome,AiOutlineHome,AiOutlineHeart} from "react-icons/ai";
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {ImSwitch} from 'react-icons/im';


class HeaderBar extends React.Component {
	

	render() {
		return (

			<div className="HeaderBar">
				<h1>instagram</h1>
				
				<div className="IconTray">
					<h2><AiOutlineHome/></h2>
					<h2><IoMdPaperPlane /></h2>
					<h2><RiCompassDiscoverLine /></h2>
					<h2><AiOutlineHeart /></h2>
					<h2 ><ImSwitch/></h2>
					
				</div>

				
				
			</div>

			);
	}
}

export default HeaderBar;