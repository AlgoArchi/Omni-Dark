import React, { useContext, useState } from "react";
import "../assets/styles/mainBody.css";
import { FiSettings, FiSearch } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import arrow from "../assets/images/arrow.png";
import bannerTopBox from "../assets/images/banner-top-box.png";
import faddedBox from "../assets/images/faddedBox.png";
import cryptoIcon from "../assets/images/icon.png";
import daigram from "../assets/images/daigram.png";
import daigram_light from "../assets/images/daigram-light.png";
import matic_grant from "../assets/images/polygon.svg";
import harmony_grant from "../assets/images/harmony.svg";
import near_grant from "../assets/images/near.svg";
import uniswap from "../assets/images/uniswap.svg";
import quickswap from "../assets/images/quickswap.svg";
import { Link } from "react-router-dom";
import pangolin from "../assets/images/pangolin.svg";
import _inch from "../assets/images/1inch.svg";
import sushiswap from "../assets/images/sushiswap.svg";
import ox from "../assets/images/0x.svg";
import pancakeswap from "../assets/images/pancakeswap.svg";
import solarbeam from "../assets/images/solarbeam.png";
import certik_light from "../assets/images/certik-light.png";
import certik_dark from "../assets/images/certik-dark.png";
import spiritswap from "../assets/images/spiritswap.png";
import xdai from "../assets/images/xdai.svg";
import fantom from "../assets/images/fantom.svg";
import ethereum from "../assets/images/ethereum.svg";
import avalanche from "../assets/images/avalanche.svg";
import harmony from "../assets/images/harmony.svg";
import bsc from "../assets/images/bsc.svg";
import facebook from "../assets/images/communityIcons/fb.svg";
import discord from "../assets/images/communityIcons/discord.svg";
import github from "../assets/images/communityIcons/github.svg";
import email from "../assets/images/communityIcons/mail.svg";
import twitter from "../assets/images/communityIcons/twitter.svg";
import telegram from "../assets/images/communityIcons/telegram.svg";
import coingecko from "../assets/images/communityIcons/coingecko.svg";
import { ThemeContext } from "../theme/ThemeContext";

const MainBody = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	
	return (
		<div className='home__3KnWO'>
			<section className='container_main_'>
				<div id='grad1'>
					<div className='container'>
						<div className='screen__3DOGq'>
							<span style={{ width: "50%" }}>
								<h5
									style={{
										fontSize: "24px",
										margin: 0,
										textAlign: "left",
									}}
								>
									NEW RELEASE
								</h5>
								<h2 className='screen__title__vymBx'>
									<span className=''>
										<span className='nowrap'>
											Vision-chain
											<br />
										</span>
										exchange
										<br className='screen__br__3HphO' />
									</span>{" "}
									protocol
								</h2>
								<div className='screen__info__2QpSI'>
									<p className='screen__text__1p3Jl'>
										<span>
											The Vision-DEX is a cross-chain exchange allowing
											the swap of thousands of tokens across 8
											different blockchains seamlessly
										</span>
									</p>
									<Link
										to='/'
										className='screen__link__1gw9g'
										rel='noreferrer'
									>
										Start Trading
										<img
											className='arrow__3f0-7'
											src={arrow}
											height={15}
											width={35}
											alt='arrow'
										/>
									</Link>
								</div>
							</span>

							<div className='screen__instruction__2oDJw'>
								<div className='screen_instruction_inner'>
									<div className='landing_instruction'>
										<span style={{ color: "#fff" }}>
											Complete multi chain <br /> swap in 1 click!
										</span>
									</div>
									<div className='landing_instruction_search'>
										<div className='landing_instruction_search_input'>
											<div className='input-icons'>
												<FiSearch
													className='icon'
													size={26}
													color={"#fff"}
												/>
												<input
													className='input-field'
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
								<img
									className='screen__big-cube__mMoMv'
									src={bannerTopBox}
									height={150}
									alt='Decorative cube1'
								/>
								<img
									className='screen__blured-cube__5rokD'
									src={faddedBox}
									alt='Decorative cube'
								/>{" "}
							</div>
						</div>
						<div className='screen__info__2QpSI_secondary'>
									<p className='screen__text__1p3Jl'>
										<span>
											The Vision-DEX is a cross-chain exchange allowing
											the swap of thousands of tokens across 8
											different blockchains seamlessly
										</span>
									</p>
									<Link
										to='/'
										className='screen__link__1gw9g'
										rel='noreferrer'
									>
										Start Trading
										<img
											className='arrow__3f0-7'
											src={arrow}
											height={15}
											width={35}
											alt='arrow'
										/>
									</Link>
								</div>
						<div className='gradient' />
					</div>
				</div>
			</section>
			<section className='omniDex_advantages'>
				<div className='advantages__SkBVq'>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							src={cryptoIcon}
							height={80}
							width={80}
							alt='Advantage image'
						/>
						<h3 className='advantage__title__Jtk7W'>Multi-chain swaps</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							height={80}
							src={cryptoIcon}
							width={80}
							alt='Advantage image'
						/>
						<h3 className='advantage__title__Jtk7W'>8 Blockchains</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							src='assets/icons/advantages/trades.svg'
							alt='Advantage image'
							height={80}
							src={cryptoIcon}
							width={80}
						/>
						<h3 className='advantage__title__Jtk7W'>
							Trade 10000+ assets
						</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
				</div>
			</section>
			<section className='about__1wd5a'>
				<h2 className='about__title__3oBok'>
					What is {"  "}
					<span className='highlight'>Vision?</span>
				</h2>
				<img
					className='about__image__Ry7YU'
					src={darkMode ? daigram : daigram_light}
					alt='What is Vision'
				/>
				<div className='about__info__3eAVO'>
					<p className='about__text__3jNbk'>
						<span>
							Vision is the ultimate exchange protocol that allows users to
							exchange a token from one chain to another with ease.
							Featuring Ethereum, Smart Chain, Avalanche, Polygon,
							Fantom, and more by utilizing over 50 decentralized
							exchanges.
						</span>
					</p>
					<Link
						to='/'
						className='button button_glassy action_button_def'
						style={{ backgroundColor: darkMode ? "#07315d" : "#649dbe" }}
					>
						Action Button
						<img
							className='button__arrow'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
					<Link to='/' className='screen__link__1gw9g' rel='noreferrer'>
						Action Button
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
				</div>
				<div className='gradient__31T_H' />
			</section>
			<section className='grants__32DqA'>
				<h2 className='grants__title__1PoEy'>
					Grants <span className='highlight'>for Vision</span>
				</h2>
				<p className='grants__text__fxIfw'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
					<br /> eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className='grants__list__121p9'>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={matic_grant} alt='Matic Grant' />
						Matic Grant
					</div>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={harmony_grant} alt='Harmony One Grant' />
						Harmony One Grant
					</div>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={near_grant} alt='NEAR Grant' />
						NEAR Grant
					</div>
				</div>
			</section>
			<section className='audits__366o9'>
				<h2 className='audits__title__5FrFg'>
					<span className='highlight'>Vision </span>Audits
				</h2>
				<p className='audits__text__1kN0O'>
					Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
					sed do eiusmod tempor incididunt ut labore
				</p>
				<div className='audits__list__3OBjG'>
					<div
						className='_1NVMLAeGTqGbKx__SalZv8'
						style={{ width: "38vw" }}
					>
						<img
							height={70}
							src={darkMode ? certik_dark : certik_light}
							id='certik'
							alt='Audits CertiK'
						/>
						<span>CertiK Audit</span>
					</div>
					<Link
						to='/'
						className='screen__link__1gw9g'
						rel='noreferrer'
						style={{ height: "56px", marginLeft: "52px" }}
					>
						Action Button
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
				</div>
			</section>
			<section className='partners__3xIAI'>
				<div className='partners__title__1CYAp'>
					<h2>
						<span className='highlight'>Vision </span>
						<br className='partners__br__32LPN' />
						supports
					</h2>
					<img
						className='partners__main-cube__3H4O7'
						src={bannerTopBox}
						// width={28}
						alt='Decorative cube'
					/>
				</div>
				<div className='partners__blocks__1hYQ4'>
					<div>
						<div className='partners__subtitle__31ICZ'>
							<h3>Dexes</h3>
						</div>
						<div className='partners__list__26Fh1'>
							<div className='partner__3YHW9'>
								<img width={50} src={uniswap} alt='Uniswap' />
								Uniswap
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={quickswap} alt='Quickswap' />
								Quickswap
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={pangolin} alt='Pangolin' />
								Pangolin
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={_inch} alt='1inch' />
								1inch
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={sushiswap} alt='Sushiswap' />
								Sushiswap
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={ox} alt='0x protocol' />
								0x protocol
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={pancakeswap} alt='Pancakeswap' />
								Pancakeswap
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={matic_grant} alt='Polygon' />
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={solarbeam} alt='Solarbeam' />
								Solarbeam
							</div>
							<div className='partner__3YHW9'>
								<img width={45} src={spiritswap} alt='Spiritswap' />
								Spiritswap
							</div>
						</div>
					</div>
					<div>
						<div className='partners__subtitle__31ICZ'>
							<h3>Blockchains</h3>
							<img
								className='partners__blured-cube__Pv_-u'
								src={faddedBox}
								alt='Decorative cube'
							/>
						</div>
						<div className='partners__list__26Fh1'>
							<div className='partner__3YHW9'>
								<img src={ethereum} alt='Ethereum' />
								Ethereum
							</div>
							<div className='partner__3YHW9'>
								<img src={matic_grant} alt='Polygon' />
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img src={fantom} alt='Fantom' />
								Fantom
							</div>
							<div className='partner__3YHW9'>
								<img src={xdai} alt='xDai' />
								xDai
							</div>
							<div className='partner__3YHW9'>
								<img src={avalanche} alt='Avalanche' />
								Avalanche
							</div>
							<div className='partner__3YHW9'>
								<img src={matic_grant} alt='Polygon' />
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img src={harmony} alt='Harmony' />
								Harmony
							</div>
							<div className='partner__3YHW9'>
								<img src={bsc} alt='BSC' />
								BSC
							</div>
						</div>
					</div>
				</div>
				<div className='gradient__1Dstx' />
			</section>
			<section className='trade__3nosP'>
				<h2 className='trade__title__6tKjg'>
					Trade <br className='trade__br__Xh7vw' />
					<span className='highlight'>your token</span>
					<br />
					directly on
					<br />
					<span className='highlight'>your platform!</span>
				</h2>
				<p className='trade__text__SfbzQ'>
					The Vision Relay Widget enables users to buy and sell tokens on any
					website. This means that your users can buy token, without having
					to leave your website! It’s free and Already joined 40+ projects.
				</p>

				<Link to='/' className='screen__link__1gw9g' rel='noreferrer'>
					Action Button
					<img
						className='arrow__3f0-7'
						src={arrow}
						height={15}
						width={35}
						alt='arrow'
					/>
				</Link>
			</section>

			{/* omnidex calculations */}

			<section className='calculations_container'>
				<div
					className='calculations_inner'
					style={{
						backgroundColor: darkMode
							? "#0c1d42b2"
							: "hsl(0deg 0% 79% / 61%)",
					}}
				>
					<div className='calc_title'>
						<span>Vision-DEX</span>
						<span
							style={
								darkMode
									? {}
									: {
											backgroundColor: "#a8adb3",
											borderRadius: ".5rem",
											padding: ".5rem .6rem .4rem",
									  }
							}
						>
							<FiSettings color='#fff' size={26} />
						</span>
					</div>
					<div className='calc_swap_container'>
						<div className='calc_swap_block'>
							<div className='token_indicator'>
								<div
									className='token_indicator_container'
									style={{
										backgroundColor: darkMode ? "#031730" : "#a8adb3",
									}}
								>
									<img
										src={ethereum}
										height={24}
										width={24}
										alt='token'
									/>
								</div>
							</div>
							<div className='token_input_buttons'>
								<div
									className='token-amount-input-container'
									style={{
										backgroundColor: darkMode ? "#081e3f" : "#becad5",
									}}
								>
									<input
										type='text'
										style={{ color: darkMode ? "#fff" : "#666a6c" }}
									/>
									<button
										type='button'
										style={{
											backgroundColor: darkMode
												? "#050d21"
												: "#919ba6",
										}}
									>
										ETH
									</button>
								</div>
								<div>
									<button
										type='button'
										className='token_info_buttons'
										style={
											darkMode
												? {
														backgroundColor: "#081e3f",
														color: "#fff",
												  }
												: {
														backgroundColor: "#becad5",
														color: "#666a6c",
												  }
										}
									>
										$4,259
									</button>
								</div>
							</div>
						</div>
						<div className='calc_swap_arrow'>
							<button type='button'>
								<img
									className='arrow__3f0-7'
									src={arrow}
									height={15}
									width={35}
									alt='arrow'
								/>
							</button>
						</div>
						<div className='calc_swap_block calc_swap_block_block'>
							<span style={{ display: "flex" }}>
								<div className='token_indicator'>
									<div
										className='token_indicator_container'
										style={{
											backgroundColor: darkMode
												? "#031730"
												: "#a8adb3",
										}}
									>
										<img
											src={ethereum}
											height={24}
											width={24}
											alt='token'
										/>
									</div>
								</div>
								<div className='token_input_buttons'>
									<div
										className='token-amount-input-container'
										style={{
											backgroundColor: darkMode
												? "#081e3f"
												: "#becad5",
										}}
									>
										<input
											type='text'
											style={{
												color: darkMode ? "#fff" : "#666a6c",
											}}
										/>
										<button
											type='button'
											style={{
												backgroundColor: darkMode
													? "#050d21"
													: "#919ba6",
											}}
										>
											VISION
										</button>
									</div>
									<div>
										<button
											type='button'
											className='token_info_buttons'
											style={
												darkMode
													? {
															backgroundColor: "#081e3f",
															color: "#fff",
													  }
													: {
															backgroundColor: "#becad5",
															color: "#666a6c",
													  }
											}
										>
											$4,259
										</button>
										<button
											type='button'
											className='token_info_buttons'
											style={
												darkMode
													? {
															backgroundColor: "#081e3f",
															color: "#fff",
													  }
													: {
															backgroundColor: "#becad5",
															color: "#666a6c",
													  }
											}
										>
											Est. Fee $70
										</button>
									</div>
								</div>
							</span>
							<Link
								to='/'
								style={{
									minWidth: "180px",
									height: "56px",
									marginLeft: "22px",
								}}
								className='screen__link__1gw9g action_calc_button'
								rel='noreferrer'
							>
								Action Button
								<img
									className='arrow__3f0-7'
									src={arrow}
									height={15}
									width={35}
									alt='arrow'
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* omnidex calculations */}

			<section className='doc-container__3Ot-h'>
				<div
					className='doc__3KXY3'
					style={{
						backgroundColor: darkMode
							? "#0c1d42b2"
							: "hsl(0deg 0% 79% / 61%)",
					}}
				>
					<div className='doc__info__1QgQf'>
						<h2 className='doc__title__2v02J'>Documentation</h2>
						<p className='doc__text__1LslB'>
							Find out more about our Multi-Chain solution and platform.
						</p>
					</div>
					<Link to='/' className='screen__link__1gw9g' rel='noreferrer'>
						Know More
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
				</div>
				<img
					className='doc__cube__6tzQM'
					src={bannerTopBox}
					height={120}
					width={120}
					alt='Decorative cube'
				/>
			</section>

			<section className='subscription__2SoKh'>
				<div className='subscription__container__25DDT'>
					<div>
						<h2 className='subscription__title__2R0N8'>
							Subscribe to our newsletter
						</h2>
						<p className='subscription__text__qXvTm'>
							Fill in your email to receive Omni’s latest info and
							updates
						</p>
					</div>
					<form className='signup-form__2Wjqj' id='subscribeToLetters'>
						<input
							className='signup-form__input__1SY-X'
							id='email'
							name='email'
							type='email'
							required
							placeholder='Email address'
						/>
						<Link
							to='/'
							// style={{ width: "auto" }}
							className='screen__link__1gw9g signup-form__submit__RSCiX'
							rel='noreferrer'
						>
							Action Button
						</Link>
					</form>
				</div>
			</section>
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
						©Copyright Vision 2021,{" "}
						<Link to='/' className='_3d4_tKssgilyA1Tcp3MBFt'>
							Privacy policy
						</Link>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default MainBody;
