import React, { useState, useEffect } from "react";
import styled from "styled-components";
import left from "./left.png";
import right from "./Right.png";

import Swal from "sweetalert2";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import axios from "axios";
import LoadingState from "../../LoadingState";
import { users } from "../Global/GlobalState";

// const url: string = "https://hercall2.herokuapp.com";
const url: string = "http://localhost:2233";

const SigninPage = () => {
  const [user, setUser] = useRecoilState(users);

  const navigate = useNavigate();

  const [myChecked, setMyChacked] = useState(true);
  const [loading, setLoading] = useState(false);

  const yupSchema = yup.object().shape({
    voteCode: yup.string().required("Please enter your vote code!"),
    email: yup.string().email().required("Please enter your desired email!"),
    password: yup.string().required("Please enter your choice password!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (value) => {
    const newURL = `${url}/api/user/signin`;

    setLoading(true);
    await axios
      .post(newURL, value)
      .then((res) => {
        setUser(res.data.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Login unsuccessful: ${error}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          // navigate("/");
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Wrapper>
        <Card onSubmit={onSubmit}>
          <LogoHolder to="/">
            {/* <Bar>One</Bar> */}
            <Logo>NYCN</Logo>
            <LogoTitle>NYCN Election Platform</LogoTitle>
          </LogoHolder>
          <Title>
            <TitleHead>Log-In 🚀</TitleHead>
            <TitleSub>
              to stay connected with <span>NYCN Election Poll</span>, Login now!
            </TitleSub>
          </Title>
          <br />
          <InputRow>
            <InputHolder1>
              <Label>Your Vote Code</Label>
              <Input placeholder="Your Vote Code" {...register("voteCode")} />
              <Error>{errors?.voteCode && <p>Please fill this field</p>}</Error>
            </InputHolder1>

            <InputHolder2>
              <Label>Email</Label>
              <Input placeholder="Email" {...register("email")} />
              <Error>{errors?.email && <p>Please fill this field</p>}</Error>
            </InputHolder2>
          </InputRow>
          <InputRow>
            <InputHolder1>
              <Label>Password</Label>
              <Input
                placeholder="Password"
                {...register("password")}
                type="password"
              />
              <Error>{errors?.password && <p>Please fill this field</p>}</Error>
            </InputHolder1>
          </InputRow>
          <Statement>
            <TextContent to="/forgot">Forgot your Password?</TextContent>
          </Statement>

          <BUtton
            type="submit"
            bg={myChecked ? "bg" : ""}
            // disabled={!myChecked}
            onClick={() => {}}
          >
            Sign In
          </BUtton>
          <Content>
            Don't have an account yet?
            <Span to="/register"> Why not create one </Span>
          </Content>
          <LineHolder>
            <Line />
            <Text>OR</Text>
            <Line />
          </LineHolder>
          <Social>
            <SocialText>Stay connected with us via our Social Media</SocialText>
            <Icons>
              <Icon />
              <Icon1 />
              <Icon2 />
              <Icon3 />
            </Icons>
          </Social>
        </Card>
      </Wrapper>

      <Space />
      <Holder>
        <Left src={left} />
        <Right src={right} />
      </Holder>
    </Container>
  );
};

export default SigninPage;

const TextContent = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  color: #000269;
  cursor: pointer;
  position: absolute;
  top: 350px;
  right: 28px;
  @media screen and (max-width: 360px) {
    margin-top: 20px;
    font-size: 12px;
  }
`;

const Statement = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: flex-end; */
`;

const Text = styled.div`
  font-size: 15px;
  padding: 0 5px;
`;

const Line = styled.div`
  border-bottom: 1px solid silver;
  width: 100%;
`;

const LineHolder = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const InputRow = styled.div`
  display: flex;
`;

const Icon = styled(AiFillGoogleCircle)`
  font-size: 35px;
  color: red;
  :hover {
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;

const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 0px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Span = styled(Link)`
  text-decoration: none;
  color: #000269;
  font-weight: 700;
  margin-left: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  font-size: 13px;
  justify-content: center;
`;

const BUtton = styled.button<{ bg: string }>`
  margin: 20px 0;
  width: 100%;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#000269" : "gray")};
  color: white;
  border: 0;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
  font-family: Poppins;
  text-transform: uppercase;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;

const COntent = styled.div`
  font-size: 13px;
  span {
    color: #000269;
    font-weight: 700;
  }
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CheckHolder = styled.div`
  display: flex;
`;

const Error = styled.div`
  color: red;
  position: absolute;
  bottom: -27px;
  font-size: 10px;
  font-weight: bolder;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  font-size: 13px;
  border: 0;
  padding-left: 10px;
  background-color: transparent;
  ::placeholder {
    font-family: Poppins;
    color: lightgray;
  }
`;

const Label = styled.label`
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 0 3px;
  font-weight: 700;
`;

const InputHolder2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 35px;
  border: 1px solid #000269;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  margin-left: 3px;
  color: #000269;
`;

const InputHolder1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 35px;
  border: 1px solid #000269;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-right: 5px;
  color: #000269;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 35px;
  border: 1px solid #000269;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: #000269;
`;

const TitleSub = styled.div`
  color: lightgray;
  font-weight: 500;
  font-size: 13px;

  span {
    color: #000269;
    font-weight: bold;
  }
`;

const TitleHead = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: #000269;
`;

const Title = styled.div`
  margin-top: 30px;
`;

const LogoTitle = styled.div`
  font-weight: 700;
  color: gray;
  width: 100px;
  line-height: 1;
  font-size: 25px;
  color: #000269;
`;

const Logo = styled.div`
  padding: 30px 20px;
  background-color: #000269;
  color: white;
  border-radius: 3px;
  margin-right: 5px;
  font-weight: 700;
`;

const LogoHolder = styled(Link)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const Card = styled.form`
  width: 90%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 450px;
  min-height: 700px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

const Right = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Left = styled.img`
  width: 248px;
  height: 185px;
  object-fit: cover;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url("https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/auth-v1-mask-light.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Space = styled.div`
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
