import React from "react";
import styled from "styled-components";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
import LoadingState from "../../../LoadingState";
import Swal from "sweetalert2";
import { useRecoilValue } from "recoil";
import jwt from "jwt-decode";
import { users } from "../../Global/GlobalState";
import Rating from "./Rating";

const url: string = "http://localhost:2233";

const YouthCondinator = () => {
  const sortData = (props: any) => {
    return (a: any, b: any) => {
      if (a[props] > b[props]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [presy, setPresy] = useState([]);

  const schema = yup.object().shape({
    voterID: yup.string().required("you've vote yet!!!🚫🚫"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const user = useRecoilValue(users);

  interface iData {
    _id: string;
  }

  let id: string | undefined;
  if (user) {
    let data: iData = jwt(user.getToken);
    id = data?._id;
  }
  const voteNow = handleSubmit(async (data) => {
    const { voterID } = data;

    const newURL = `${url}/api/presVote/${voterID}/${id}/create`;

    setLoading(true);
    await axios
      .post(newURL)
      .then((res) => {
        if (res.data.message.split("r")[0] === "You can't ") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2500,
          }).then(() => {
            //   navigate("/");
          });
          setLoading(false);
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2500,
          }).then(() => {
            //   navigate("/");
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Entry unsuccessful: ${error}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          // navigate("/");
        });
        setLoading(false);
      });
  });

  const getUser = async () => {
    const newURL = `${url}/api/president/view`;
    await axios.get(newURL).then((res) => {
      setPresy(res.data.data.sort(sortData("voter")));
      console.log(presy);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {loading ? <LoadingState /> : null}
      <Divc>
        <Mydrop>
          <Catcon>
            Youth Co-ordinator{" "}
            <span>
              <IoIosArrowDropdownCircle />
            </span>
          </Catcon>
          <Top>Leading Candidate</Top>
          <Sin>
            {presy.map((props: any, i) => (
              <div key={props._id}>
                {i < 2 ? (
                  <TopCon>
                    <ImgCon src={props.image} />
                    <Namepo>
                      {props.fullName}
                      <Loading>
                        <Dbar1
                          w={`${(
                            <Rating voter={props.voter} _id={props._id} />
                          )}px`}
                        />
                        <pre style={{ display: "flex" }}>
                          {<Rating voter={props.voter} _id={props._id} />}%
                        </pre>
                      </Loading>
                    </Namepo>
                  </TopCon>
                ) : null}
              </div>
            ))}
          </Sin>
        </Mydrop>

        <DropCon>
          <form onSubmit={voteNow}>
            {presy.map((props: any) => (
              <DropItem key={props._id}>
                <input
                  type="radio"
                  id="item1"
                  value={props._id}
                  {...register("voterID", { required: true })}
                />
                <Label htmlFor="subscribeNews">
                  <DivCan>
                    <ImaCan src={props.image} />
                    <DivDe>
                      {props.fullName}
                      <pre>Co-ordinator</pre>
                      <Div>
                        total vote:
                        <div style={{ marginLeft: "5px" }} />
                        <Rating voter={props.voter} _id={props._id} />{" "}
                      </Div>
                    </DivDe>
                  </DivCan>
                </Label>
              </DropItem>
            ))}

            <Error>{errors?.voterID && "please cast your vote⚠️⚠️"}</Error>
            <DropItem>
              <Button type="submit">Vote</Button>
            </DropItem>
          </form>
        </DropCon>
      </Divc>
    </div>
  );
};

export default YouthCondinator;

const Div = styled.div`
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
  display: flex;
`;

const Sin = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    // flex-direction:column;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #050794;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
`;

const Label = styled.label`
  margin-top: 3px;
`;

const DivCan = styled.div`
  line-height: 5px;
  display: flex;
  margin-left: 5px;
`;
const ImaCan = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  object-fit: cover;
`;
const DivDe = styled.div`
  margin-left: 5px;
  margin-top: 5px;
`;

const Error = styled.div`
  color: red;
  margin-top: -5px;
`;
const Dbar = styled.div<{ w: string }>`
  width: 60px;
  height: 7px;
  background-color: green;
  border-radius: 6px;
`;
const Dbar1 = styled.div<{ w: string }>`
  width: ${({ w }) => w};
  height: 7px;
  background-color: #f9a603;
  border-radius: 6px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  height: 11px;

  pre {
    margin-left: 5px;
  }
`;

const Namepo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-left: 5px;
  font-weight: 600;
  margin-top: -2px;
  pre {
    font-weight: 200;
  }
`;
const ImgCon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  object-fit: cover;
  background-color: grey;
`;

const Top = styled.div`
  width: 100%;
  font-weight: 500;
  color: #fbaf1b;
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

const Mydrop = styled.div`
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

const DropItem = styled.div`
  padding: 10px;
  transtion: all 0.2s;
  display: flex;

  :hover {
    background-color: #f4f4f4;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0px;
  }
`;

const Divc = styled.div`
  width: 87%;
  margin: 10px auto;

  position: relative;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const DropCon = styled.div`
  // position:absolute;
  top: 110%;
  padding: 9px;
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
    padding: 8px;
  }
`;
