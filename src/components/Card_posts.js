import React from "react";
import '../css/MainPageCss.css';
import { IoMdSend, IoMdPaperPlane } from "react-icons/io";
import {AiFillHome,AiOutlineHome,AiOutlineHeart} from "react-icons/ai";
import {RiCompassDiscoverLine} from 'react-icons/ri';


class BigCard extends React.Component {
	

	render() {
		return (

			<div className="BigCard">
				<div className="CardTopBar">

				</div>


				<div className="CardImage">
				</div>

				<div className="CardBottomBar">
				<h2><AiOutlineHeart /></h2>
				<h2><AiOutlineHeart /></h2>
				<h2><IoMdPaperPlane /></h2>
				</div>

			</div>

			);
	}
}

export default BigCard;