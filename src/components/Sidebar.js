import React from 'react';
import "../assets/styles/sidebar.css";
import logo from "../assets/images/logo.svg";
import burgerMenu from "../assets/images/slider-icon.png";
import swap from "../assets/sidebar/swap.png";
import bridge from "../assets/sidebar/bridge.png";
import staking from "../assets/sidebar/staking.png";
import more from "../assets/sidebar/more.png";

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className='d-flex align-items-center px-4 mt-3 mb-4'>
                <div><img className="mr-3" src={burgerMenu} width={30} alt='menu' /></div>
                <div><img src={logo} height={50} width={160} alt='OmniDEX logo' /></div> 
            </div>
            <a className="menu-item" href="/">
                <img className="mr-2" src={swap} width={25} alt='swap' />
                Swap
            </a>
            <a className="menu-item" href="/">
                <img className="mr-2" src={bridge} width={25} alt='swap' />
                Bridge
            </a>
            <a className="menu-item" href="/">
                <div className="mr-2 blankIcon"></div>
                Multi-Chain
            </a>
            <a className="menu-item" href="/">
                <img className="mr-2" src={staking} width={25} alt='staking' />
                Staking
            </a>
            <a className="menu-item" href="/">
                <div className="mr-2 blankIcon"></div>
                Farming
            </a>
            <a className="menu-item" href="/">
                <div className="mr-2 blankIcon"></div>
                NFT
            </a>
            <a className="menu-item" href="/">
                <img className="mr-2" src={more} width={25} alt='more' />
                More
            </a>
        </div>
    );
};

export default Sidebar;