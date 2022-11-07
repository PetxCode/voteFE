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
import logo from "./NYCN.png";
import axios from "axios";
import LoadingState from "../../LoadingState";

const url = "http://localhost:2233";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [myChecked, setMyChacked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(logo);
  const [avatar, setAvatar] = useState(logo);

  const yupSchema = yup.object().shape({
    organisationName: yup.string().required("Please enter your Church Name!"),
    fullName: yup.string().required("Please enter your Full Name!"),
    email: yup.string().email().required("Please enter your desired email!"),
    password: yup.string().required("Please enter your choice password!"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Your password most MATCH"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onChnageImage = (e: any) => {
    const file = e.target.files[0];

    setImage(URL.createObjectURL(file));
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    const { fullName, organisationName, email, password } = value;

    const formData = new FormData();

    formData.append("image", avatar);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("organisationName", organisationName);

    const options = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newURL = `${url}/api/user/create`;

    setLoading(true);
    await axios
      .post(newURL, formData, options)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registeration successful",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/confirm");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registeration unsuccessful",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Wrapper>
        <Card onSubmit={onSubmit}>
          <br />

          <LogoHolder to="/">
            <Logo>NYCN</Logo>
            <LogoTitle>NYCN Election Platform</LogoTitle>
          </LogoHolder>

          <Title>
            <TitleHead>Register 🚀🥊</TitleHead>
            <TitleSub>
              to stay connected with <span>NYCN Election Poll</span>, Get
              registered!
            </TitleSub>
          </Title>
          <br />

          <ImageHolder>
            <Image src={image} />
            <ImageInput id="pix" onChange={onChnageImage} type="file" />
            <ImageLabel htmlFor="pix" bg="d">
              Upload Your Avatar
            </ImageLabel>
          </ImageHolder>

          <br />
          <InputHolder>
            <Label>Organisation Name</Label>
            <Input
              placeholder="Organisation Name"
              {...register("organisationName")}
            />
            <Error>
              {errors?.organisationName && <p>Please fill this field</p>}
            </Error>
          </InputHolder>

          <InputRow>
            <InputHolder1>
              <Label>Full Name</Label>
              <Input placeholder="Full Name" {...register("fullName")} />
              <Error>{errors?.fullName && <p>Please fill this field</p>}</Error>
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
            <InputHolder2>
              <Label>Confirm</Label>
              <Input
                placeholder="Confirm"
                {...register("confirm")}
                type="password"
              />
              <Error>
                {errors?.confirm && <p>Your password must MATCH</p>}
              </Error>
            </InputHolder2>
          </InputRow>

          <CheckHolder>
            <CheckBox
              type="checkbox"
              //   value={myChecked}
              onClick={() => {
                setMyChacked(!myChecked);
              }}
            />
            <COntent>
              I agree to NYCN AJIF chapter <span>policy</span> &{" "}
              <span>terms</span>
            </COntent>
          </CheckHolder>
          <BUtton
            type="submit"
            bg={myChecked ? "bg" : ""}
            disabled={!myChecked}
            onClick={() => {
              console.log("Hello", myChecked);
            }}
          >
            Sign up
          </BUtton>

          <Content>
            Already have an account?
            <Span to="/signin">Sign in instead</Span>
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

export default RegistrationPage;

const ImageLabel = styled.label<{ bg: string }>`
  /* margin: 20px 0; */
  /* height: 50px; */
  background-color: ${({ bg }) => (bg ? "#000269" : "gray")};
  color: white;
  border: 0;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: Poppins;
  text-transform: uppercase;
  transition: all 350ms;
  padding: 15px 30px;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 10px;
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
  /* display: none; */
`;

const Wrapper = styled.div`
  width: 450px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
  position: relative;
`;

const Space = styled.div`
  flex: 1;
`;

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
