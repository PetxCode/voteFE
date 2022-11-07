import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { users } from "../Global/GlobalState";

const MainPage = () => {
  const [user, setUser] = useRecoilState(users);
  console.log(user);
  return (
    <div>
      <div>Main Page</div>
      <BUtton
        type="submit"
        bg="l"
        onClick={() => {
          setUser(null);
        }}
      >
        Sign out
      </BUtton>
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
