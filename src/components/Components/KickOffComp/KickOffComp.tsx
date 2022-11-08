import React from "react";
import styled from "styled-components";
const KickOffComp = () => {
	return (
		<>
			<Container>
				<First>
					<Span>NEXT KICKOFF:</Span>

					<Span2>December 3</Span2>
					<span>
						Saturday 10:00 AM - 1:00 PM WAT
						<br /> Sunday 2:00 PM - 5:00 PM WAT
					</span>
				</First>
				<Second>
					<Holder>
						<Icon src='/assets/ic1.svg' />
						<Tex>8 Weeks (weekends only)</Tex>
					</Holder>
					<Holder>
						<Icon src='/assets/ic2.svg' />
						<Tex>Virtual Live Poll</Tex>
					</Holder>
					<Holder>
						<Icon src='/assets/1c3.svg' />
						<Tex>Expert Candidate</Tex>
					</Holder>
				</Second>
				<Third>
					<Button bg='#fbaf1b'>Enroll Now </Button>
				</Third>
			</Container>
			<Last>
				<Hl1></Hl1>
				<Hl2></Hl2>
				<Hl3></Hl3>
			</Last>
		</>
	);
};

export default KickOffComp;
const Last = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
`;
const Hl1 = styled.div`
	height: 4px;
	width: 33.3%;
	background-color: #63db9c;
`;
const Hl2 = styled.div`
	height: 4px;
	width: 33.3%;
	background-color: #050794;
`;
const Hl3 = styled.div`
	height: 4px;
	width: 33.3%;
	background-color: #fbaf1b;
`;

const Button = styled.div<{ bg: string }>`
	height: 35px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.bg};
	color: white;

	transition: all 350ms;
	cursor: pointer;
	border-radius: 5px;
	margin-right: 10px;

	:hover {
		transform: scale(0.98);
	}

	@media screen and (max-width: 600px) {
		width: 150px;
		font-size: 12px;
	}
`;
const Holder = styled.div`
	text-align: center;
	color: #050794;
	font-weight: bold;
	margin-right: 30px;
	margin-left: 30px;
`;
const Icon = styled.img`
	height: 30px;
`;
const Tex = styled.div`
	font-size: 12px;
`;

const Span = styled.div`
	margin-top: 10px;
	font-size: 12px;
`;
const Span2 = styled.div`
	font-weight: bold;
	color: #050794;
	margin-top: 10px;
`;
const First = styled.div`
	span {
	}
`;
const Second = styled.div`
	display: flex;
	@media screen and (max-width: 600px) {
		margin-top: 20px;
	}
`;
const Third = styled.div``;
const Container = styled.div`
	/* height: 100px; */
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	padding-top: 30px;
`;
