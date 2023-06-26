import React from "react";
import Burger from "../../assets/images/burger.png";

const Header = () => {
	return (
		<header>
			<h1>
				web<span>tech</span>
			</h1>
			<ul>
				<li>About</li>
				<li>Services</li>
				<li>Works</li>
				<li>Blog</li>
				<li>Contacts</li>
			</ul>
			<div className="menu">
				<select name="" id="">
					<option value="">EN</option>
					<option value="">KR</option>
					<option value="">RU</option>
					<option value="">UZ</option>
				</select>

				<button>Start project &rarr;</button>
				{/* <div className="image-container">
					<div className="img"></div>

				</div> */}
				<img src={Burger} alt="" srcset="" />
			</div>
		</header>
	);
};

export default Header;
