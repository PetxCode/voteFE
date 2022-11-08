import React from "react";
import styled from "styled-components";
const LastComponent = () => {
  return (
    <Container>
      <Wrapper>
        <h2>How You can get started?</h2>
        <br />
        <Second>
          <Holder>
            <Icon src="/assets/cast.webp" />
            <TextHold>
              <Tex>Select Representatives</Tex>
              <p>
                Join and collaborate with other students in Instructor-led
                virtual classes.
              </p>
              <br />

              <Button bg="#fbaf1b">Enroll Now </Button>
            </TextHold>
          </Holder>
          <Holder>
            <Icon src="/assets/cast.webp" />
            <TextHold>
              <Tex>Cast Your Vote</Tex>
              <p>
                Join and collaborate with other students in Instructor-led
                virtual classes.
              </p>
              <br />

              <Button bg="#fbaf1b">Enroll Now </Button>
            </TextHold>
          </Holder>
        </Second>
      </Wrapper>
    </Container>
  );
};

export default LastComponent;

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

const TextHold = styled.div`
  margin-left: 15px;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

const Holder = styled.div`
  /* color: #050794; */
  margin: 0 10px;
  font-weight: bold;
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  p {
    /* font-size: 15px; */
    width: 250px;
    font-weight: 300;
  }
  /* margin-right: 30px;
	margin-left: 30px; */
`;
const Icon = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 960px) {
    height: 150px;
    width: 150px;
    margin-right: 10px;
  }
`;
const Tex = styled.h3`
  font-weight: 900;
  color: #050794;
  /* font-size: 12px; */
`;

const Second = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    /* margin-top: 20px; */
    /* 
		justify-content: center;
		align-items: center;
		text-align: center; */
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin-top: 50px;
`;
const Container = styled.div`
  /* height: 400px; */
  width: 100%;
  background-color: #fffdf7;
  padding-bottom: 20px;
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
