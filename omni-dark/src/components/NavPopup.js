import React, { useEffect, useState } from "react";
import "../assets/styles/navPopup.css";
import theme_toggle_dark from "../assets/images/popup/dark-mode.png";
import language_icon from "../assets/images/popup/english-icon.png";
import tutorial_icon_dark from "../assets/images/popup/tutorial.png";
import { FiChevronRight } from "react-icons/fi";

const NavPopup = ({toggleSwitch, settoggleSwitch}) => {
	
	// useEffect(() => {
	// 	let root = document.getElementsByTagName("html")[0];
	// 	if (toggleSwitch) {
	// 		root.classList.add("dark");
	// 	} else {
	// 		root.classList.remove("dark");
	// 	}
	// }, [toggleSwitch]);

	return (
		<div id='modals' style={{ zIndex: 1000 }}>
			<div />
			<div />
			<div />
			<div
				className='_8e7JriZ3TGBEEqYJcxhQH'
				style={{ top: "75.5px", left: "53vw" }}
			>
				<div
					className='b1wrYDKlpvqv6pS_mCwck _1A7hsyIuo366Cm918KSon5'
					style={{ opacity: 1 }}
				>
					<div className='_2t4A391bL88og_xvoDv53l'>
						<h3 className='uORlbOGDjKcuNFTjwHKMk'>Settings</h3>
						<ul className='_3DgFXcyOkq2iAtWH0tuygf'>
							<li className='qurKyclokEqI27YQFICdG'>
								<div className='_2v_45L7smCuYTlHG8WCvAn'>
									<img
										src={theme_toggle_dark}
										height={28}
										width={28}
										alt='theme'
									/>
									<label className='switch'>
										<input
											type='checkbox'
											onChange={
												settoggleSwitch
											}
											checked={toggleSwitch}
										/>
										<span className='slider round'></span>
									</label>
								</div>
								<div>
									<h4 className='jM5sqd_NxOiSJHWFeDzFA'>Dark mode</h4>
									<p className='zorFu3tJU8T7A_tRbulRm'>
										Theme for the web
									</p>
								</div>
							</li>
							<li className='qurKyclokEqI27YQFICdG'>
								<div className='_2v_45L7smCuYTlHG8WCvAn'>
									<img
										height={30}
										width={30}
										src={language_icon}
										alt='Language flag'
									/>
									<FiChevronRight size={20} color={"gray"} />
								</div>
								<div>
									<h4 className='jM5sqd_NxOiSJHWFeDzFA'>English</h4>
									<p className='zorFu3tJU8T7A_tRbulRm'>
										Choose language
									</p>
								</div>
							</li>
							<li className='qurKyclokEqI27YQFICdG'>
								<a
									href='#'
									className='_2KBxVIi6GvBQSJfFdbtGEb'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='_2v_45L7smCuYTlHG8WCvAn'>
										<img
											src={tutorial_icon_dark}
											height={28}
											width={32}
											alt='Tutorials'
										/>
										<FiChevronRight size={20} color={"gray"} />
									</div>
									<div>
										<h4 className='jM5sqd_NxOiSJHWFeDzFA'>
											Tutorials
										</h4>
										<p className='zorFu3tJU8T7A_tRbulRm'>
											How to use
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavPopup;
