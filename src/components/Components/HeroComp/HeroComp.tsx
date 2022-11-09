import React from "react";
import styled from "styled-components";
import { MdSecurity } from "react-icons/md";
const HeroComp = () => {
  return (
    <Container>
      <First>
        {" "}
        <h5>Trusted By 55+ Organizations in NYCN</h5>
        <h1>
          Easy Online Election <Br />
          Excellence
        </h1>
        <p>
          ElectionBuddy guarantees election integrity, boosts voter engagement
          and saves serious hours. It's free to test and free for up to 20
          voters.
        </p>
        <ButHold>
          <Button bg="#fbaf1b">Enroll Now </Button>
          <Button bg="#050794">Get Started </Button>
        </ButHold>
      </First>

      <Second>
        <Box1>
          <FirImg src="/assets/3.png" />
        </Box1>
        <Box2>
          <Holding>
            <h4>Online Election</h4>
            <span>What you will find in the Election</span>
            <IconHold>
              <Icon>
                <MdSecurity /> <Span>President</Span>
              </Icon>
              <Icon>
                <MdSecurity /> <Span>Pro</Span>
              </Icon>
              <Icon>
                <MdSecurity /> <Span>Accountant</Span>
              </Icon>
              <Icon>
                <MdSecurity /> <Span>Secretary</Span>
              </Icon>
              <Icon>
                <MdSecurity /> <Span>President</Span>
              </Icon>
              <Icon>
                <MdSecurity /> <Span>President</Span>
              </Icon>
            </IconHold>
            <br />
            <Button2 bg="#fbaf1b">Vote Now</Button2>
            <h4>Start your Data Analytics Fast Track Journey TODAY!</h4>
            <span>Register for the next class.</span>
            <br />
            <br />

            <Button2 style={{ color: "black" }} bg="white">
              Get started{" "}
            </Button2>
          </Holding>
        </Box2>
      </Second>
    </Container>
  );
};

export default HeroComp;

const Br = styled.div`
  margin-top: 2px;
`;

const Holding = styled.div`
  width: 95%;
  /* background-color: red; */
`;

const Span = styled.div`
  margin-left: 5px;
  color: white;
  font-size: 11px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 5px;
`;
const IconHold = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
`;

const FirImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    border-radius: 5px;
  }
`;
const Box1 = styled.div`
  width: 350px;
  /* background-color: blue; */
  height: 400px;

  @media screen and (max-width: 600px) {
    height: 250px;
    border-radius: 5px;
  }
`;
const Box2 = styled.div`
  width: 300px;
  background-color: #050794;
  border-radius: 5px;
  height: 400px;

  color: white;
  padding-left: 10px;

  span {
    font-size: 10px;
    color: silver;
  }

  h4 {
    margin-bottom: 5px;
  }
`;

const ButHold = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`;

const Button2 = styled.div<{ bg: string }>`
  height: 35px;
  width: 100%;
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
    /* width: 120px; */
    font-size: 12px;
  }
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
    width: 120px;
    font-size: 12px;
  }
`;

const Second = styled.div`
  width: 700px;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const First = styled.div``;

const Container = styled.div`
  min-height: 430px;
  height: 100%;
  width: 100%;
  background-color: #f3f8fe;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 30px;

  p {
    width: 500px;

    @media screen and (max-width: 600px) {
      width: 95%;
    }
  }

  h5 {
    margin-bottom: -10px;
    padding-bottom: 0px;
    color: gray;
  }

  h1 {
    color: #050794;
    font-weight: 900;
    font-size: 40px;
  }

  @media screen and (max-width: 960px) {
    height: 100%;
    padding-left: 15px;
    /* width: 90%; */
  }
`;
