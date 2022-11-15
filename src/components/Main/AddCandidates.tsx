import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingState from "../../LoadingState";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { candidate } from "../Global/GlobalState";

interface iUser {
  image: string;
  fullName: string;
  orgName: string;
  email: string;
  _id: string;
}

const url: string = "https://authtestdb.herokuapp.com";

const AddCandidates = () => {
  const [cand, setCand] = useRecoilState(candidate);

  const [pres, setPres] = useState(true);
  const [vice, setVice] = useState(false);
  const [social, setSocial] = useState(false);
  const [pro, setPro] = useState(false);
  const [secretary, setSecretary] = useState(false);
  const [legal, setLegal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [searchUser, setSearchUser] = useState("");
  const [searchUserData, setSearchUserData] = useState({} as iUser);

  const getUser = async () => {
    await axios
      .get(`${url}/api/user/word/start?fullName=${searchUser}`)
      .then((res) => {
        setSearchUserData(res.data.data);
        console.log(searchUser, searchUserData);
      });
  };

  const presidentPost = async () => {
    const newURL = `${url}/api/president/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  const vicePresidentPost = async () => {
    const newURL = `${url}/api/vicePresident/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  const socialSecretaryPost = async () => {
    const newURL = `${url}/api/socialSecretary/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  const secretaryPost = async () => {
    const newURL = `${url}/api/secretary/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  const legalPost = async () => {
    const newURL = `${url}/api/legal/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  const candidateData = async () => {
    const newURL = `${url}/api/organisation/candidates`;
    await axios.get(newURL).then((res) => {
      setCand(res.data.data);
    });
  };

  const proPost = async () => {
    const newURL = `${url}/api/pro/${searchUserData._id}/create`;
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
          setSearchUser("");
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
  };

  useEffect(() => {
    getUser();
    candidateData();
  }, []);

  return (
    <div>
      <Container>
        {loading ? <LoadingState /> : null}
        <Wrapper>
          <Path>
            <PathRoute
              bg={pres ? "i" : ""}
              bc={pres ? "i" : ""}
              c={pres ? "" : "i"}
              onClick={() => {
                setPres(true);
                setVice(false);
                setSocial(false);
                setPro(false);
                setSecretary(false);
                setLegal(false);
              }}
            >
              President
            </PathRoute>
            <PathRoute
              bg={vice ? "i" : ""}
              bc={vice ? "i" : ""}
              c={vice ? "" : "i"}
              onClick={() => {
                setPres(false);
                setVice(true);
                setSocial(false);
                setPro(false);
                setSecretary(false);
                setLegal(false);
              }}
            >
              Vice President
            </PathRoute>
            <PathRoute
              bg={secretary ? "i" : ""}
              bc={secretary ? "i" : ""}
              c={secretary ? "" : "i"}
              onClick={() => {
                setPres(false);
                setVice(false);
                setSocial(false);
                setPro(false);
                setSecretary(true);
                setLegal(false);
              }}
            >
              Secretary
            </PathRoute>
            <PathRoute
              bg={social ? "i" : ""}
              bc={social ? "i" : ""}
              c={social ? "" : "i"}
              onClick={() => {
                setPres(false);
                setVice(false);
                setSocial(true);
                setPro(false);
                setSecretary(false);
                setLegal(false);
              }}
            >
              Social Secretary
            </PathRoute>
            <PathRoute
              bg={pro ? "i" : ""}
              bc={pro ? "i" : ""}
              c={pro ? "" : "i"}
              onClick={() => {
                setPres(false);
                setVice(false);
                setSocial(false);
                setPro(true);
                setSecretary(false);
                setLegal(false);
              }}
            >
              P.R.O
            </PathRoute>
            <PathRoute
              bg={legal ? "i" : ""}
              bc={legal ? "i" : ""}
              c={legal ? "" : "i"}
              onClick={() => {
                setPres(false);
                setVice(false);
                setSocial(false);
                setPro(false);
                setSecretary(false);
                setLegal(true);
              }}
            >
              Legal
            </PathRoute>
          </Path>

          {pres ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={presidentPost}>Add To President</Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : vice ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={vicePresidentPost}>
                      Add To Vice-President
                    </Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : secretary ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={secretaryPost}>Add To secretary</Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : social ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={socialSecretaryPost}>
                      Add To Social-Secretary
                    </Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : pro ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={proPost}>Add To PRO</Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : legal ? (
            <div>
              <Search>
                <InputUser
                  placeholder="Search for User"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <Butt onClick={getUser}>Search User</Butt>
              </Search>

              <br />
              <br />
              <br />

              {searchUserData ? (
                <div>
                  {" "}
                  <Card>
                    <Image src={searchUserData.image} />
                    <Name>{searchUserData.fullName}</Name>
                    <Mail>{searchUserData.email}</Mail>
                    <Mail>FROM: {searchUserData.orgName}</Mail>

                    <Butt onClick={legalPost}>Add To Legal</Butt>
                  </Card>
                </div>
              ) : (
                <User>No User Found</User>
              )}
            </div>
          ) : (
            <div>Hello</div>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Wrapper>
      </Container>
    </div>
  );
};

export default AddCandidates;

const User = styled.div`
  text-align: center;
  font-weight: bold;
  color: #000269;
`;

const Mail = styled.div`
  font-size: 10px;
`;

const Name = styled.div`
  font-weight: 700;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px 0;
  background-color: #000269;
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const InputUser = styled.input`
  outline: none;
  border: 1px solid #000269;
  border-radius: 2px;
  width: 280px;
  height: 40px;
  padding-left: 10px;
  ::placeholder {
    color: #000269;
    font-family: Poppins;
  }
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Butt = styled.div`
  padding: 15px 30px;
  background-color: #000269;
  border-radius: 3px;
  color: white;
  transition: all 350ms;
  border: 1px solid;
  border-color: #000269;
  margin: 10px;
  font-size: 13px;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
    transform: scale(0.977);
  }
`;

const PathRoute = styled.div<{
  bg: string;
  bc: string;
  c: string;
}>`
  padding: 15px 30px;
  background-color: ${({ bg }) => (bg ? "#000269" : "transparent")};
  border-radius: 3px;
  color: ${({ c }) => (c ? "#000269" : "white")};
  transition: all 350ms;
  border: 1px solid;
  border-color: ${({ bc }) => (bc ? "transparent" : "#000269")};
  margin: 10px;
  font-size: 13px;
  :hover {
    cursor: pointer;
    transform: scale(0.977);
  }
`;

const Path = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
