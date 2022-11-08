import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { users } from "./Global/GlobalState";
import { useRecoilValue, useRecoilState } from "recoil";

const Header = () => {
  const [show, setShow] = React.useState(true);

  const user = useRecoilValue(users);
  const [logOut, setLogOut] = useRecoilState(users);

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
        <Container bx="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <Logo src="/assets/logo.png" />
          {user ? (
            <div>
              <ButtonData
                bd=""
                cl="white"
                bg="#000269"
                onClick={() => {
                  setLogOut(null);
                }}
              >
                Sign Out
              </ButtonData>
            </div>
          ) : (
            <div>
              <NavHold>
                <Button bd="" cl="white" bg="#000269" to="/register">
                  Get Started
                </Button>
                <Button bd="#000269" cl="black" bg="" to="/signin">
                  Login
                </Button>
              </NavHold>
            </div>
          )}
        </Container>
      ) : (
        <Container bx="">
          <Logo src="/assets/logo.png" />
          <NavHold>
            <Button bd="v" cl="white" bg="#000269" to="/register">
              Get Started
            </Button>
            <Button bd="#000269" cl="black" bg="" to="/signin">
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
  height: 50px;
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

const Button = styled(Link)<{ bg: string; cl: string; bd: string }>`
  text-decoration: none;
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

const ButtonData = styled.div<{ bg: string; cl: string; bd: string }>`
  text-decoration: none;
  height: 40px;
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
