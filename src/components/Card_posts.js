import React from "react";
import '../css/MainPageCss.css';
import { IoMdSend, IoMdPaperPlane } from "react-icons/io";
import {AiFillHome,AiOutlineHome,AiOutlineHeart} from "react-icons/ai";
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import {BsChat} from 'react-icons/bs';
class BigCard extends React.Component {
	

	render() {
		return (

			<div className="BigCard">
				<div className="CardTopBar">
				<h2><CgProfile /></h2>
				<h3><HiOutlineDotsVertical /></h3>
				</div>


				<div className="CardImage">
				<img src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201510/bmw_story_647_101415024112.jpg"}/>
				</div>

				<div className="CardBottomBar">
				<h2><AiOutlineHeart /></h2>
				<h3><BsChat /></h3>
				<h2><IoMdPaperPlane /></h2>
				</div>

			</div>

			);
	}
}

export default BigCard;