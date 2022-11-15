import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { users } from "./Global/GlobalState";
import { useRecoilValue, useRecoilState } from "recoil";
import { AiOutlineMenuFold } from "react-icons/ai";
import SideBarComp from "./SideBarComp";
import jwt from "jwt-decode";

interface iUser {
  superAdmin: boolean;
}

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);
  const [sideShow, setSideShow] = React.useState(false);

  const user = useRecoilValue(users);
  const [logOut, setLogOut] = useRecoilState(users);

  const changeNavScroll = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const toggleSideBar = () => {
    setSideShow(!sideShow);
  };

  window.addEventListener("scroll", changeNavScroll);

  let token: iUser | undefined;

  if (token !== undefined) {
    token = jwt(user?.getToken);
  }

  return (
    <>
      {show ? (
        <Container bx="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <Div>
            <Link to="/">
              <Logo src="/assets/logo.png" />
            </Link>
            {user ? (
              <Div1>
                {" "}
                <Button bd="#000269" cl="#000269" bg="" to="/viewOrganisation">
                  Viewing Organisations
                </Button>
                {user.superAdmin ? (
                  <Div>
                    <Button
                      bd="#000269"
                      cl="#000269"
                      bg=""
                      to="/createOrganisation"
                    >
                      Create Organisations
                    </Button>
                    <Button bd="#000269" cl="#000269" bg="" to="/addCandidate">
                      Add Candidates
                    </Button>
                  </Div>
                ) : null}
                <Button bd="#000269" cl="#000269" bg="" to="/votePoll">
                  Cast your Vote
                </Button>
              </Div1>
            ) : null}
          </Div>
          {user ? (
            <div>
              <ButtonData
                bd=""
                cl="white"
                bg="#000269"
                onClick={() => {
                  setLogOut(null);
                  navigate("/");
                }}
              >
                Sign Out
              </ButtonData>
            </div>
          ) : (
            <div>
              <NavHold>
                {" "}
                <Button bd="" cl="white" bg="#000269" to="/register">
                  Get Started
                </Button>
                <Button bd="#000269" cl="black" bg="" to="/signin">
                  Login
                </Button>
              </NavHold>
            </div>
          )}
          <Menu onClick={toggleSideBar}>
            <AiOutlineMenuFold />
          </Menu>
          {sideShow ? <SideBarComp /> : null}
        </Container>
      ) : (
        <Container bx="">
          <Div>
            <Link to="/">
              <Logo src="/assets/logo.png" />
            </Link>
            {user ? (
              <Div1>
                {" "}
                <Button bd="#000269" cl="#000269" bg="" to="/viewOrganisation">
                  Viewing Organisations
                </Button>
                {user.superAdmin ? (
                  <Div>
                    <Button
                      bd="#000269"
                      cl="#000269"
                      bg=""
                      to="/createOrganisation"
                    >
                      Create Organisations
                    </Button>
                    <Button bd="#000269" cl="#000269" bg="" to="/addCandidate">
                      Add Candidates
                    </Button>
                  </Div>
                ) : null}
                <Button bd="#000269" cl="#000269" bg="" to="/votePoll">
                  Cast your Vote
                </Button>
              </Div1>
            ) : null}
          </Div>

          {user ? (
            <div>
              <ButtonData
                bd=""
                cl="white"
                bg="#000269"
                onClick={() => {
                  setLogOut(null);
                  navigate("/");
                }}
              >
                Sign Out
              </ButtonData>
            </div>
          ) : (
            <div>
              <NavHold>
                {" "}
                <Button bd="" cl="white" bg="#000269" to="/register">
                  Get Started
                </Button>
                <Button bd="#000269" cl="black" bg="" to="/signin">
                  Login
                </Button>
              </NavHold>
            </div>
          )}

          <Menu onClick={toggleSideBar}>
            <AiOutlineMenuFold />
          </Menu>

          {sideShow ? <SideBarComp /> : null}
        </Container>
      )}
    </>
  );
};

export default Header;

const Menu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    margin-right: 30px;
    font-size: 30px;
  }
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;

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
  font-size: 12px;
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
    display: none;
  }
`;

const Button = styled(Link)<{ bg: string; cl: string; bd: string }>`
  margin: 0 5px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  height: 43px;
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
    display: none;
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

  @media screen and (max-width: 960px) {
    display: none;
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
