import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { users } from "../Global/GlobalState";
import VoteScreen from "../Chart/VoteScreen";
import { Route, Routes } from "react-router-dom";
import ViewOrganisation from "./ViewOrganisation";
import Header from "../Header";
import Footer from "../Components/Footer/Footer";

const MainPage = () => {
  const [user, setUser] = useRecoilState(users);

  return (
    <div>
      <Header />
      <VoteScreen />
      <Footer />
    </div>
  );
};

export default MainPage;

const BUtton = styled.button<{ bg: string }>`
  margin: 20px;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#000269" : "gray")};
  color: white;
  border: 0;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: Poppins;
  text-transform: uppercase;
  transition: all 350ms;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
