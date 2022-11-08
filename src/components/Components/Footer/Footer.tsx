import React from "react";
import styled from "styled-components";

import { FaGlobeAmericas } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Place>
          <Title>Oriege</Title>
          <Text>Ajegunle-Lagos, Nigeria </Text>
        </Place>
        <Place>
          <Title>Wilmer</Title>
          <Text>Ajegunle-Lagos, Nigeria </Text>
        </Place>

        <br />
        <br />

        <Social>
          <Move
            href="https://codelab-home.web.app"
            rel="noreferrer"
            target="_blank"
          >
            <Icon />
          </Move>
          <Move
            href="https://web.facebook.com/groups/brighterdayscodelab"
            rel="noreferrer"
            target="_blank"
          >
            <FaIcon />
          </Move>

          <Move
            href="https://twitter.com/CodeOti"
            rel="noreferrer"
            target="_blank"
          >
            <TwIcon />
          </Move>
          <Move
            href="https://www.instagram.com/peter_oti_code/"
            rel="noreferrer"
            target="_blank"
          >
            <InIcon />
          </Move>
        </Social>

        <Last>
          <SideText>© 2020 - 2022 Codelab in Initiative of SkillHub •</SideText>
          <Other>PRIVACY POLICY</Other>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const SideText = styled.div`
  font-size: 12px;
  font-weight: 200;
  text-transform: uppercase;
`;
const Other = styled.div`
  font-size: 12px;
`;

const Last = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const InIcon = styled(AiFillInstagram)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: black;
  }
`;

const LiIcon = styled(AiFillLinkedin)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const TwIcon = styled(AiFillTwitterSquare)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: black;
  }
`;

const FaIcon = styled(AiFillFacebook)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: black;
  }
`;

const Icon = styled(FaGlobeAmericas)`
  transition: all 350ms;
  transform-origin: center;
  font-size: 40px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: black;
  }
`;

const Move = styled.a`
  text-decoration: none;
  color: gray;
  margin: 0 10px;
  height: 40px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
`;

const Text = styled.div`
  margin-left: 5px;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
`;

const Place = styled.div`
  margin: 20px 40px;
`;

const Wrapper = styled.div`
  width: 80%;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: #f3f8fe;
  color: black;
  display: flex;
  justify-content: center;
  z-index: 0;
  position: relative;
`;
