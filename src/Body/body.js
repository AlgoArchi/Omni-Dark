import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Group from '../images/Group.png';
import Arrow from '../images/arrow.png';
import Graph from '../images/graphic.png';
import Harmony from '../images/harmony.png'
import Polygon from '../images/polygon.png'
import Near from '../images/near.png'
import Certik from '../images/certik.png'
import Uniswap_Button from './ButtonComponent/Uniswap.js';
import Avalanche_Button from './ButtonComponent/Avalanche.js';
import BSC_Button from './ButtonComponent/BSC.js';
import Ethereum_Button from './ButtonComponent/Ethereum.js';
import Fantom_Button from './ButtonComponent/Fantom.js';
import Harmony_Button from './ButtonComponent/Harmony.js';
import Linch_Button from './ButtonComponent/Linch.js';
import OxProtocol_Button from './ButtonComponent/OxProtocol';
import Pancakeswap_Button from './ButtonComponent/Pancakeswap.js';
import Pangolin_Button from './ButtonComponent/Pangolin.js';
import Ploygon_Button from './ButtonComponent/Ploygon.js';
import Quickswap_Button from './ButtonComponent/Quickswap.js';
import Solarbeam_Button from './ButtonComponent/Solarbeam.js';
import Spiritswap_Button from './ButtonComponent/Spiritswap.js';
import Sushiswawp_Button from './ButtonComponent/Sushiswap.js';
import XDai_Button from './ButtonComponent/XDai.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function Mainbody() {
    return (
        <Container>
            {/*  --- New Release --- */}
            <div className='top Omni_chain_container'>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={6} className='text-white'>
                        <div style={{marginBottom:"2rem"}}>
                            <h5 style={{fontSize: "1.5rem", margin: 0, textAlign: "left"}}>NEW RELEASE</h5>
                            <div>
                                <strong><h2 className='Omni_chain'><span className='color'>OMNI-CHAIN<br/> EXCHANGE</span><br/>PROTOCOL</h2></strong>
                            </div>
                            <div>
                                <p className='release_para'>The Omni-DEX is a cross-chain exchange allowing the swap of thousands of tokens across 8 different blockchains seamlessly</p>
                            </div>
                            <Button className='text-white start_trading_button' variant="primary" size="lg">Start Trading <Image src={Arrow} height={17} width={45} alt='arrow' /></Button>
                        </div>
                    </Col>

                    {/*  Search form  */}
                    <Col sm={12} md={12} lg={12} xl={6} className='text-white'>
                        <div className='search_back'>
                            <p className='text-white' style={{ fontSize: "1.75rem" }}>Complete multi chain<br />swaps in 1 click!</p>
                            
                            <div className='input_search'>
                                <div>
                                    <div>
                                        <FiSearch
                                            className='search_icon'
                                            size={26}
                                            color={"#fff"}
                                        />
                                        <input
                                            className='search_input_field'
                                            type='text'
                                            placeholder='Search name or paste address'
                                        />
                                    </div>
                                </div>
                                <button type='button'>
                                    <BsFillStarFill color='#fff' size={24} />
                                </button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

            {/*  There picture "Multi,, 8 Blochain,, Trade ,"  */}
            <div className='top'>
                <div className='three_picture'>
                    <Row>
                        <Col sm={12} md={6} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h3 className='three_picture_title'>Multi-chain swaps</h3>
                            <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h1 className='three_picture_title'>8 Blockchains</h1>
                            <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                        <Col sm={12} md={12} lg={4} className='text-white'>
                            <Image src={Group} className='imgSize' />
                            <h1 className='three_picture_title'>Trade 10000+ assets</h1>
                            <p className='what_omni_para'>Lorem ipsum dolor sit amet, consecteur adipicsing elit</p>
                        </Col>
                    </Row>
                </div>
            </div>

                {/*  Graphic  */}
            <div className='top'>
                <div className='what_omni_container'>
                    <h1 className='what_omni_head text-white'><strong>WHAT IS <span className='color'>OMNI?</span></strong></h1>
                    <div className='text-white graph'>
                        <Image src={Graph} className='graphsize' />
                    </div>
                    <div className='text-white'>
                        <p className='what_omni_para'>Omni is the ultimate exchange protocol that allows users to exchange a token from one chain to another with ease.Featuring Ethereum, Smart Chain, Avalanche, Polygon, Fantom, and more by utilizing over 50 decentralized exchanges.</p>
                        <div className='buttonGroup_margin'>
                            <Button className='text-white button_1'>Action Button <BsArrowRight /></Button>
                            <Button className='text-white button_2'>Action Button <BsArrowRight /></Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* GRANT FPR OMNI */}
            <div className='top text-white'>
                <h1 className='what_omni_head'><strong>GRANTS FOR <span className='color'>OMNI</span></strong></h1>
                <p className='what_omni_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tompor incididunt ut labore et dolore magana aliqua.</p>
                <Row>
                    <Col sm={12} md={6} lg={6} className='text-white'>
                        <div className='Grnats_icon_back'>
                            <Image src={Polygon} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Matic Grant</strong></span>
                        </div>
                        <div className='Grnats_icon_back'>
                            <Image src={Near} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Near Grant</strong></span>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className='text-white'>
                        <div className='Grnats_icon_back'>
                            <Image src={Harmony} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> Harmony Grant</strong></span>
                        </div>
                    </Col>
                </Row>
            </div>

                {/* Omni Audits */}
            <div className='top text-white'>
                <h1 className='what_omni_head'><strong><span className='color'>OMNI </span> AUDITS</strong></h1>
                <p className='what_omni_para'>Lorem ipsum dolor sit amet, consectetur adipisciping<br />elit, sed do eiusmod tempor incididunt ut labore</p>
                <Row>
                    <Col md={6} className='text-white'>
                        <div className='Grnats_icon_back'>
                            <Image src={Certik} className='Grants_icon_size' /> <span style={{ paddingLeft: 30 }}><strong> CertiK Audit</strong></span>
                        </div>

                    </Col>
                    <Col md={6} className='text-white audit_button_container'>
                        <Button className='text-white audit_button' variant="primary" size="lg">Action Button <img src={Arrow} height={17} width={45} alt='arrow' /></Button>
                    </Col>
                </Row>
            </div>

                    {/* Button Group */}
            <div className='top'>
                <h1 className='what_omni_head text-white'><strong><span className='color'>OMNI </span> SUPPORTS</strong></h1>
                <Row>
                    <Col sm={6} className='text-white'>
                        <h2 className='dex_blockchain'>DEXES</h2>
                        <Row>
                            <Col lg={6} className='text-white'>
                                <Uniswap_Button />
                                <Pangolin_Button />
                                <Sushiswawp_Button />
                                <Pancakeswap_Button />
                                <Solarbeam_Button />
                            </Col>

                            <Col lg={6} className='text-white'>
                                <Quickswap_Button />
                                <Linch_Button />
                                <OxProtocol_Button />
                                <Ploygon_Button />
                                <Spiritswap_Button />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className='text-white'>
                        <h2 className='dex_blockchain'>BLOCKCHAINS</h2>
                        <Row>
                            <Col lg={6} className='text-white'>
                                <Ethereum_Button />
                                <Fantom_Button />
                                <Avalanche_Button />
                                <Harmony_Button />
                            </Col>

                            <Col lg={6} className='text-white'>
                                <Ploygon_Button />
                                <XDai_Button />
                                <Ploygon_Button />
                                <BSC_Button />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                

                    
            </div>
        </Container>
    )
}

export default Mainbody;