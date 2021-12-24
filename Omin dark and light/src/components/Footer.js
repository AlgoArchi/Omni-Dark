import React from "react";
import facebook from "../assets/images/communityIcons/fb.svg";
import discord from "../assets/images/communityIcons/discord.svg";
import github from "../assets/images/communityIcons/github.svg";
import email from "../assets/images/communityIcons/mail.svg";
import twitter from "../assets/images/communityIcons/twitter.svg";
import telegram from "../assets/images/communityIcons/telegram.svg";
import coingecko from "../assets/images/communityIcons/coingecko.svg";
import "../assets/styles/swap.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='footerContainer'>
			<div className='footer_container_inner'>
				<h3 className='footerContainerHeading'>Community</h3>
				<nav className='footerLinks d-flex justify-content-center'>
					<Link to='/' className='_2AYjj8ChaxuGx00GqNpb3u'>
						<img src={facebook} alt='facebook' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={discord} alt='dicord' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={twitter} alt='twitter' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={telegram} alt='telegram' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={email} alt='email' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={github} alt='github' />
					</Link>
					<Link className='_2AYjj8ChaxuGx00GqNpb3u' to='/'>
						<img src={coingecko} alt='coingecko' />
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
