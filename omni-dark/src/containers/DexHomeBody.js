import React ,{useContext} from 'react'
import '../assets/styles/page1.css'
import rocket from '../assets/images/page1/rocket.png'
import dotLogo from '../assets/logo.png'
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import dcbBsc from '../assets/images/page1/dcb-bsc.png'
import arrow from "../assets/images/arrow.png";
import { Link } from "react-router-dom";
import facebook from "../assets/images/communityIcons/fb.svg";
import discord from "../assets/images/communityIcons/discord.svg";
import github from "../assets/images/communityIcons/github.svg";
import email from "../assets/images/communityIcons/mail.svg";
import twitter from "../assets/images/communityIcons/twitter.svg";
import telegram from "../assets/images/communityIcons/telegram.svg";
import coingecko from "../assets/images/communityIcons/coingecko.svg";
import cube from "../assets/images/omni-doucment.png"
import Spider from "../assets/images/spider.png"
import fadedCube from "../assets/images/faddedBox.png"
import slide1Img from "../assets/images/page1/slide1-img.png"
import rect1Bg from "../assets/images/page1/rect1-bg.png"
import { Carousel } from 'react-responsive-carousel';
import { ThemeContext } from "../theme/ThemeContext";
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dotimg from "../assets/images/page1/dots-bg.png"

const DexHomeBody = () => {
    const theme1 = useContext(ThemeContext);
    const darkMode = theme1.state.darkMode;
    return (
        <div className={darkMode? 'page1BodyContainer' :'page1BodyContainerLight'}>
            <div>
                <img src={rect1Bg} className="rect1bgImage" />
                <img src={Spider} className="spider" />
            </div>
            <div className="row">
                <div className="col-md-12">
                    
                    <div  className={(darkMode?'rect1 d-flex justify-content-left align-items-center': 'rect1Light d-flex justify-content-left align-items-center')}>
                        <div>
                            <img src={rocket} className="rocketImg d-none d-md-block" alt="rocket" />
                        </div>
                        <div>
                            <h2 className={darkMode?'color2 text-uppercase cFont':'color2Light text-uppercase cFont'}>Vision Exchange</h2>
                            <h2 className={darkMode ?'text-uppercase cFont' : 'text-uppercase cFontLight'}>Lending Service</h2>
                            <button className={darkMode ? 'btn launchBtn btn-md-lg px-4' : 'btn launchBtnLight btn-md-lg px-4'}><h2>Beta Mode Launching Soon</h2></button>
                        </div>
                    </div>
                    <img src={cube} className="cubeImage" />
                </div>
                <div className="col-md-12 mt-5">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="mr-3 my-auto d-md-block">
                            <img src={dotLogo} className='dotLogo d-none d-md-block' alt="dotlogo" />
                        </div>
                        <div className="my-auto">
                            <h1 className="text-uppercase cFont text-center text-md-left">Welcome all</h1>
                            <h1 className="text-uppercase cFont text-center text-md-left"><span className={darkMode?'color2':'color2Light'}>Vision</span> Users</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex flex-column flex-md-row align-items-center mt-3">
                        <div className="mr-md-5 my-auto">
                            <h3 className='text-center text-md-left'>Complete multi chain <br /> swaps in 1 click!</h3>
                        </div>
                        <div className="my-auto beginner_btn_container">
                            <Button className={darkMode ? 'beginner_btn text-white' : 'beginner_btnLight text-white'}>Beginner? Start Here</Button>
                        </div>
                        <img src={cube} className="cubeImage1" />
                    </div>
                </div>

                    {/*  Vision Farmings */}
                <div className="col-md-12 mt-5">
                    <div className={darkMode ? 'rect2 d-flex justify-content-center align-items-center':'rect2Light d-flex justify-content-center align-items-center'}>

                            {/* Vision Farming letter container */}
                        <div className={darkMode ? 'color2' : 'color2Light'}>    
                            <h2>VISION <span className={darkMode ? 'cFont' : 'cFontLight'}>FARMINGS </span></h2>
                            <p>Vision is the ultimate exchange protocol</p>
                            <div className="d-flex">
                                <div className='launchBtn_container'>
                                    <Button variant="contained" className={darkMode ? 'launchBtn btn-md-lg d-flex' : 'launchBtnLight btn-md-lg d-flex'} endIcon={<LockIcon />}>Locked</Button>
                                </div>
                                <div>
                                    <Button className={darkMode ? 'unlockbtn_gra btn-md-lg d-flex' : 'unlockbtn_graLight btn-md-lg d-flex'} endIcon={<ArrowRightAltIcon className='wallet_arrow' />}>
                                        Unlock Wallet                                        
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <img src={cube} className="cubeImage2" />
                    <div className={darkMode? 'rect3 d-flex flex-column justify-content-center justify-content-md-start': 'rect3Light d-flex flex-column justify-content-center justify-content-md-start'}>
                        <div className={darkMode ? 'color2 text-center text-md-left' : 'color2Light text-center text-md-left'}>
                            <h2><span className={darkMode ?'cFont':'cFontLight'}>HOT</span> FARMS</h2>
                            <h6 className="">Vision is the ultimate exchange protocol</h6>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-start">
                            <div className="d-flex justify-content-center justify-content-md-start bgDCB mr-md-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-start bgDCB  mt-2 mt-md-0 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5 position-relative">
                    <img src={cube} className="cubeImage4" />
                    <div className={darkMode? 'rect4 d-flex flex-column justify-content-center justify-content-md-start py-5':'rect4Light d-flex flex-column justify-content-center justify-content-md-start py-5'}>
                        <div className={darkMode ? 'color2 text-center text-md-left' : 'color2Light text-center text-md-left'}>
                            <h2><span className={darkMode ? 'cFont' : 'cFontLight'}>COOL </span> POOLS</h2>
                            <h6 className="">Vision is the ultimate exchange</h6>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-start">
                            <div className="d-flex justify-content-center justify-content-md-start bgDCB mr-md-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-start bgDCB mt-2 mt-md-0 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 d-none d-md-block mt-5">
                    <div className="d-flex flex-column flex-md-row align-items-start mt-3">
                        <div className="mr-md-5">
                            <h1 className="text-uppercase cFont mt-4"> Whats the<span className={darkMode?'color2':'color2Light'}> news? </span></h1>
                            <h3 className='text-center text-md-left'></h3>
                        </div>
                        <div className="my-auto">
                            <div className={darkMode?'swipe1':'swipe1Light'}>
                            <Carousel>
                                <div>
                                    <img src={slide1Img} width={140}/>
                                    <h3>OmniTv Ep28 - Beefy Finance</h3>
                                    <p>Lorem ipsum dolor sit amet,  ectetur adipiscing elit, sed  </p>
                                </div>
                                <div>
                                <img src={slide1Img} width={140}/>
                                    <h3>second news</h3>
                                </div>
                                <div>
                                <img src={slide1Img} width={140}/>
                                    <h3>Third news</h3>
                                </div>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">

                    <div className={`d-flex flex-column justify-content-center align-items-center mt-4 py-md-4 ${darkMode?'rect5':'rect5Light'}`}>
                        <div>
                            <h2 className={darkMode ? 'cFont mb-3 text-center text-md-left' :'cFontLight mb-3 text-center text-md-left'}><span className={darkMode?'color2':'color2Light'}>VISION EXCHANGE</span> STATS</h2>
                        </div>
                        <div className="d-flex flex-column">
                            <div className={darkMode?'rect5-item1':'rect5-item1Light'}>
                                <span className="text-uppercase">Total Value Locked</span>
                                <span>$ 454,252,717</span>
                            </div>
                            <div className={darkMode?'rect5-item2':'rect5-item2Light'}>
                                <span className="text-uppercase">USD Market Cap</span>
                                <span>$ 132,712,547</span>
                            </div>
                            <div className={darkMode?'rect5-item1':'rect5-item1Light'}>
                                <span className="text-uppercase">Banana in circulation</span>
                                <span>81,734,610</span>
                            </div>
                            <div className={darkMode?'rect5-item2':'rect5-item2Light'}>
                                <span className="text-uppercase">Gnana in circulation</span>
                                <span>12,669,166</span>
                            </div>
                            <div className={darkMode ? 'rect5-item1' : 'rect5-item1Light'}>
                                <span className="text-uppercase">Total Banana Burned</span>
                                <span>15,504,256</span>
                            </div>
                        </div>
                    </div>
                    <img src={dotimg} className="dot_img" />
                </div>
                
                <div className="col-md-12 p-0">
                    <div className="newsLetter">
                        <div>
                            <h2 className="text-center text-md-left">Subscribe to our newsletter</h2>
                            <p className="text-center text-md-left">Fill in your email to receive Omni's latest info and updates</p>
                        </div>
                        <div>
                            <div style={{ background: 'white', padding: '10px' }}>
                                <div className="input-group">
                                    <input type="text" className="form-control fs-lg border-0" placeholder="Email Address" id="mail" name="email" />
                                    <div className="input-group-append">
                                        <button className="btn btn-gradient px-4">Submit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-12 p-0">
                    <footer className='footer_container'>
                        <div className='_2CnzWZ7-9CkSBh7Czhrq7O'>
                            <div className='xKGRxEZ58RoSqMJGbrrq6'>
                                <div>
                                    <h3 className='_1taTtc7XhIMqvwCgfnppti'>Community</h3>
                                    <nav className='_3jt2oztRe9u2DB6DlqqmE_'>
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
                                <div>
                                    <h3 className='_1taTtc7XhIMqvwCgfnppti'>Documents</h3>
                                    <nav className='RmujUMsYkKkkuRY8eS296'>
                                        <Link to='/'>
                                            Pitch Deck
                                            <img
                                                className='arrow__3f0-7'
                                                src={arrow}
                                                height={15}
                                                width={35}
                                                alt='arrow'
                                            />
                                        </Link>
                                        <Link to='/'>
                                            One Pager
                                            <img
                                                className='arrow__3f0-7'
                                                src={arrow}
                                                height={15}
                                                width={35}
                                                alt='arrow'
                                            />
                                        </Link>
                                        <Link to='/'>
                                            Roadmap
                                            <img
                                                className='arrow__3f0-7'
                                                src={arrow}
                                                height={15}
                                                width={35}
                                                alt='arrow'
                                            />
                                        </Link>
                                    </nav>
                                </div>
                                <div>
                                    <h3 className='_1taTtc7XhIMqvwCgfnppti'>Company</h3>
                                    <nav className='RmujUMsYkKkkuRY8eS296'>
                                        <Link to='/'>
                                            Merch Shop
                                            <img
                                                className='arrow__3f0-7'
                                                src={arrow}
                                                height={15}
                                                width={35}
                                                alt='arrow'
                                            />
                                        </Link>
                                        <Link to='/'>
                                            Contact Our Team
                                            <img
                                                className='arrow__3f0-7'
                                                src={arrow}
                                                height={15}
                                                width={35}
                                                alt='arrow'
                                            />
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            <p className='nEVyhRp2L427W-NvwfPEX'>
                                ©Copyright Omni 2021,{" "}
                                <Link to='/' className='_3d4_tKssgilyA1Tcp3MBFt'>
                                    Privacy policy
                                </Link>
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

    )
}

export default DexHomeBody