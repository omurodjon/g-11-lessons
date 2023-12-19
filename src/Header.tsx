import React from 'react';
import './Header.css';
import gr_201 from './images/Group 201.png';
import gr_6 from './images/Group 6.png';

function Header() {
	return (
		<div className="bd1">
			<div className="pic1">
				<svg
					width="104"
					height="46"
					viewBox="0 0 104 46"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.89593 15.7031L1.95289 13.7707L9.73211 7.53006L9.89593 15.7031Z"
						fill="#544CAC"
					/>
					<path
						d="M20.3396 11.3583L11.6498 18.3272L11.3796 4.74039L20.3396 11.3583Z"
						fill="#FF5C00"
					/>
					<path
						d="M35.264 29.2917L45.4859 31.7696L35.4835 39.8074L35.264 29.2917Z"
						fill="#544CAC"
					/>
					<path
						d="M8.94073 23.0539L33.5401 3.1798L34.4464 41.7506L8.94073 23.0539Z"
						fill="#544CAC"
					/>
					<path
						d="M53.798 35L57.713 25.111H56.176L57.249 22.414H58.786L60.787 17.397H53.798V14.7H64.557L61.483 22.414H63.049L62.005 25.111H60.41L57.539 32.303H64.557V35H53.798ZM69.6064 35V14.7H72.3034V35H69.6064ZM76.1244 35V14.7H84.8244C85.385 14.7 85.8684 14.903 86.2744 15.309C86.6804 15.715 86.8834 16.208 86.8834 16.788V23.023C86.8834 23.603 86.6804 24.096 86.2744 24.502C85.8684 24.908 85.385 25.111 84.8244 25.111H84.2154L86.8834 35H84.2154L81.5184 25.111H78.8214V35H76.1244ZM78.8214 22.414H83.1714C83.442 22.414 83.6837 22.3173 83.8964 22.124C84.109 21.9113 84.2154 21.66 84.2154 21.37V18.441C84.2154 18.151 84.109 17.9093 83.8964 17.716C83.6837 17.5033 83.442 17.397 83.1714 17.397H78.8214V22.414ZM92.18 35C91.6386 35 91.165 34.797 90.759 34.391C90.353 33.985 90.15 33.4823 90.15 32.883V16.817C90.15 16.2177 90.353 15.715 90.759 15.309C91.165 14.903 91.6386 14.7 92.18 14.7H98.763C99.3816 14.7 99.8843 14.903 100.271 15.309C100.677 15.715 100.88 16.2177 100.88 16.817V32.883C100.88 33.4823 100.677 33.985 100.271 34.391C99.8843 34.797 99.3816 35 98.763 35H92.18ZM93.833 32.332H97.11C97.4386 32.332 97.6996 32.2257 97.893 32.013C98.1056 31.8003 98.212 31.5393 98.212 31.23V18.47C98.212 18.1413 98.1056 17.8803 97.893 17.687C97.6996 17.4743 97.4386 17.368 97.11 17.368H93.833C93.5623 17.368 93.3206 17.4743 93.108 17.687C92.9146 17.8803 92.818 18.1413 92.818 18.47V31.23C92.818 31.5393 92.9146 31.8003 93.108 32.013C93.3206 32.2257 93.5623 32.332 93.833 32.332Z"
						fill="#272626"
					/>
				</svg>
			</div>

			<div className="navbar">
				<h4>Home</h4>
				<h4>Pricing</h4>
				<h4>Blog</h4>
				<h4>Become a member</h4>
				<h4>About us</h4>
				<p className="h-[35px] w-[200px] ms-9	bg-[#FFFFFF] text-[#A5A5A5] text-[14px] flex items-center ps-3 rounded-xl ">
					Search here...
				</p>
				<span className="text-[#4238AF] text-[16px]">Log in</span>
				<span>/</span>
				<span className="text-[16px]">Sing Up</span>
			</div>
			<img className="pic2" src={gr_201} alt="" />
			<h1 className="find">Find out talented freelancer with better review faster.</h1>
			<h1 className="lor1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip.
			</h1>
			<div className="demo_watch flex">
				<button className="btn1">Discover Now</button>
				<div className="watch flex justify-center items-center gap-3">
					<img src={gr_6} alt="" />
					<p>Demo Watch</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
