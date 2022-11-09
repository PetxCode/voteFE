import React from "react";
import styled from "styled-components";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import YouthCondinator from "./YouthCondinator";
import DeputyCordinator from "./DeputyCordinator";
import Generalsecretary from "./Generalsecretary";
import AssistanceGenSec from "./AssistanceGenSec";
import PublicRelationsOfficer from "./PublicRelationsOfficer";
import SocialSecretary from "./SocialSecretary";
import Treasurer from "./Treasurer";
import Bar from "./Bar.";

const Poll = () => {
  return (
    <Container>
      <Wrapper>
        <PollCon>
          <Polltitle>&nbsp; &nbsp; &nbsp; &nbsp;Poll.</Polltitle>
          <Scrollmy>
            <YouthCondinator />
            <DeputyCordinator />
            <Generalsecretary />
            <AssistanceGenSec />
            <PublicRelationsOfficer />
            <SocialSecretary />
            <Treasurer />
          </Scrollmy>
        </PollCon>
        <TotalView>
          <CartTotal>
            <Bar />
          </CartTotal>
        </TotalView>
      </Wrapper>
    </Container>
  );
};

export default Poll;

const Dbar = styled.div`
  width: 100px;
  height: 7px;
  background-color: green;
  border-radius: 6px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  height: 11px;
`;

const Scrollmy = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: auto;
`;

const Top = styled.div`
  width: 100%;
  font-weight: 500;
  color: #fbaf1b;
`;
const ImgCon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  background-color: grey;
`;
const Namepo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 5px;
  margin-left: 5px;
  font-weight: 600;
  margin-top: 5px;
  pre {
    font-weight: 200;
  }
`;

const Catcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  color: #050794;
`;
const TopCon = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

const DropItem = styled.div`
  padding: 10px;
  transtion: all 0.2s;

  :hover {
    background-color: #f4f4f4;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0px;
  }
`;

const DropCon = styled.div`
  // position:absolute;
  top: 110%;
  padding: 17px;
  background-color: whitesmoke;
  font-width: 700;
  color: #333;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  left: 0;
  width: 94%;
  transtion: all 500ms;

  animation: sweep 0.5s ease-in-out;

  @keyframes sweep {
    0% {
      opacity: 0;
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 800px) {
    padding: 7px;
  }
`;

const Mydrop = styled.summary`
  padding: 10px;
  background-color: white;
  font-width: 700;
  use-select: none;
  color: #333;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transtion: all 500ms;
  flex-direction: column;
  animation: sweep 0.5s ease-in-out;

  @keyframes sweep {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  span {
    margin-top: 5px;
  }
`;

const Divc = styled.details`
  width: 90%;
  margin: 10px auto;

  position: relative;

  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;
const Det = styled.details`
  width: 90%;
`;
const Sum = styled.summary`
  height: 50px;
  width: 95%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 10px;
`;

const Polltitle = styled.div`
  width: 100%;
  color: white;
  height: 50px;
  background-color: #050794;
  font-weight: 700;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
`;

const CartTotal = styled.div`
  width: 400px;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media screen and (max-width: 800px) {
    width: 100%;

    margin-top: 20px;
  }
`;

const PollCon = styled.div`
  width: 600px;
  min-height: 90vh;

  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media screen and (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;
const TotalView = styled.div`
  height: 90vh;
  width: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100px;
  }
`;
