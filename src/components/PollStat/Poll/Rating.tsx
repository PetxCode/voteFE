import axios from "axios";
import React, { useEffect, useState } from "react";
import { presidentVote } from "../../Global/GlobalState";
import { useRecoilState, useRecoilValue } from "recoil";

interface iRating {
  voter: [];
  _id: string;
}
// const url: string = "https://hercall2.herokuapp.com";

const url: string = "https://authtestdb.herokuapp.com";

const Rating: React.FC<iRating> = ({ voter, _id }): any => {
  const [getData, setGetData]: any = useState([]);

  const [changeData, setChangeData] = useRecoilState(presidentVote);
  const voters = useRecoilValue(presidentVote);

  const fetchData = async () => {
    const newURL = `${url}/api/user/${_id}`;
    console.log(newURL);
    await axios.get(newURL).then((res) => {
      setGetData(res.data.data.voter);
      setChangeData(res.data.data.voter.length);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>{getData.length}</div>;
};

export default Rating;
