import React from "react";
import styled from "styled-components";

const Header = () => {
	const [show, setShow] = React.useState(false);

	const changeNavScroll = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeNavScroll);

	return (
		<>
			{show ? (
				<Container bx='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'>
					<Logo src='/assets/logo.png' />
					<NavHold>
						<Button bd='' cl='white' bg='#fbaf1b'>
							Get Started
						</Button>
						<Button bd='#000269' cl='black' bg=''>
							Login
						</Button>
					</NavHold>
				</Container>
			) : (
				<Container bx=''>
					<Logo src='/assets/logo.png' />
					<NavHold>
						<Button bd='' cl='white' bg='#fbaf1b'>
							Get Started
						</Button>
						<Button bd='#000269' cl='black' bg=''>
							Login
						</Button>
					</NavHold>
				</Container>
			)}
		</>
	);
};

export default Header;

const Container = styled.div<{ bx: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 600;
	height: 70px;
	position: sticky;
	top: 0;
	z-index: 1;
	box-shadow: ${(props) => props.bx};
	background-color: #f3f8fe;
`;
const Logo = styled.img`
	height: 40px;
	margin-left: 50px;
	object-fit: contain;
	color: black;

	@media screen and (max-width: 600px) {
		margin-left: 10px;
	}
`;
const NavHold = styled.div`
	display: flex;
	align-items: center;
	margin-right: 50px;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
	}
`;
const Button = styled.div<{ bg: string; cl: string; bd: string }>`
	height: 35px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1.5px solid ${(props) => props.bd};
	background-color: ${(props) => props.bg};
	color: ${(props) => props.cl};
	transition: all 350ms;
	cursor: pointer;
	border-radius: 5px;
	margin-right: 10px;

	:hover {
		transform: scale(0.98);
	}

	@media screen and (max-width: 600px) {
		width: 100px;
		font-size: 12px;
	}
`;
const Nav = styled.div`
	margin-right: 20px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
		color: gray;
	}
`;
