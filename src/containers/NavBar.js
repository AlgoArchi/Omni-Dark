import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
// import logo from "../assets/images/logo.svg";
import logo from "../assets/images-new/common/logo.png";
import NavPopup from "../components/NavPopup";
import { ThemeContext } from "../theme/ThemeContext";

const NavBar = () => {
	const [toggleNavPopup, settoggleNavPopup] = useState(false);
	const [toggleSwitch, settoggleSwitch] = useState(true);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleThemeSwitch = () => {
		if (darkMode) {
			settoggleSwitch(false);
			theme.dispatch({ type: "LIGHTMODE" });
		} else {
			settoggleSwitch(true);
			theme.dispatch({ type: "DARKMODE" });
		}
	};

	return (
		<Fragment>
			<header id='main-header' className='header_container'>
				<div className='header_inner'>
					<Link to='/' className='header_brand'>
						<img src={logo} width={60} alt='OmniDEX logo' />
						<span className="text-uppercase">Vision Exchange</span>
					</Link>
					<nav className='nav_items'>
						<Link to='/'>Home</Link>
						<Link to='/'>Page 1</Link>
						<Link to='/'>Page 2</Link>
					</nav>
					<div className='nav_actions'>
						<div
							className='nav_toggle_container'
							onClick={() => settoggleNavPopup(!toggleNavPopup)}
						>
							<button className='toggle_button'>
								<div className='toggle_bar' />
								<div className='toggle_bar' />
								<div className='toggle_bar' />
							</button>
						</div>
						<Link to='/dex' className='action_button' style={{ backgroundColor: darkMode ? '#2ca8e3' : '#649dbe' }}>
							Launch App
						</Link>
					</div>
				</div>
			</header>
			{toggleNavPopup ? (
				<NavPopup
					toggleSwitch={toggleSwitch}
					settoggleSwitch={handleThemeSwitch}
				/>
			) : null}
		</Fragment>
	);
};

export default NavBar;
