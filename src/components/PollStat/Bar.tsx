import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { io, Socket } from "socket.io-client";

// const socket = io("https://authtestdb.herokuapp.com");
const url: string = "https://authtestdb.herokuapp.com";

// const url: string = "http://localhost:2233";
const socket: Socket = io("http://localhost:2233");

interface iRating {
  voter?: [];
  _id?: string;
  show?: boolean;
  num?: boolean;
}

const BarGraph: React.FC<iRating> = ({ voter, _id, show, num }) => {
  const [getData, setGetData]: any = useState([]);
  const [val, setVal] = useState(0);

  const fetchData = async () => {
    const newURL = `${url}/api/user/${_id}`;
    console.log(newURL);
    await axios.get(newURL).then((res) => {
      setVal(res.data.data.voter.length);
    });
  };

  const fetchDataData = async () => {
    const newURL = `${url}/api/presVote/president/view`;
    console.log(newURL);
    await axios.get(newURL).then((res) => {
      //   setGetData(res.data.data.voter);
      setGetData(res.data.data.length);
    });
  };

  //   const [show, setShow] = useState(false)
  console.log(getData);
  useEffect(() => {
    fetchData();
    fetchDataData();

    socket.on("voter", () => {
      fetchData();
    });

    socket.on("president", () => {
      fetchDataData();
    });
  }, []);

  return (
    <div>
      {num ? <div>{(val / getData) * 100}</div> : null}
      {show ? <Bar w={`${(val / getData) * 100}px`} /> : null}
    </div>
  );
};

export default BarGraph;

const Bar = styled.div<{ w: string }>`
  width: ${({ w }) => w};
  height: 7px;
  background-color: #000269;
  border-radius: 6px;
  margin-top: 3px;
  margin-right: 5px;
`;
