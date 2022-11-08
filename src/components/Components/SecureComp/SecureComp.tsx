import React from "react";
import styled from "styled-components";
const SecureComp = () => {
	return (
		<Container>
			<Wrapper>
				<h2>What You Can Do With Us</h2>
				<br />
				<Second>
					<Holder>
						<Icon src='/assets/ic2.svg' />
						<Tex>Elect Representatives</Tex>
						<p>
							Join and collaborate with other students in Instructor-led virtual
							classes.
						</p>
					</Holder>
					<Holder>
						<Icon src='/assets/1c3.svg' />
						<Tex>Embrace Candidates</Tex>
						<p>
							Join and collaborate with other students in Instructor-led virtual
							classes.
						</p>
					</Holder>
					<Holder>
						<Icon src='/assets/ic1.svg' />
						<Tex>Streamline Decisions</Tex>
						<p>
							Join and collaborate with other students in Instructor-led virtual
							classes.
						</p>
					</Holder>
					<Holder>
						<Icon src='/assets/1c4.svg' />
						<Tex>Assess Industrial Action</Tex>
						<p>
							Join and collaborate with other students in Instructor-led virtual
							classes.
						</p>
					</Holder>
				</Second>
			</Wrapper>
		</Container>
	);
};

export default SecureComp;

const Holder = styled.div`
	/* color: #050794; */
	font-weight: bold;

	p {
		/* font-size: 15px; */
		width: 250px;
		font-weight: 300;
	}

	/* margin-right: 30px;
	margin-left: 30px; */
`;
const Icon = styled.img`
	height: 40px;
`;
const Tex = styled.h5`
	font-weight: 900;
	/* font-size: 12px; */
`;

const Second = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	@media screen and (max-width: 960px) {
		/* margin-top: 20px; */

		justify-content: center;
		align-items: center;
		text-align: center;
	}
`;

const Wrapper = styled.div`
	width: 90%;
	margin-top: 50px;
`;
const Container = styled.div`
	height: 400px;
	width: 100%;
	background-color: #f9f9f8;
	/* padding-left: 30px; */
	display: flex;
	justify-content: center;
	@media screen and (max-width: 960px) {
		height: 100%;

		h2 {
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
	/* align-items: center; */
`;
