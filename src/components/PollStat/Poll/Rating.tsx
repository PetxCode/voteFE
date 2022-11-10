import axios from "axios";
import React, { useEffect, useState } from "react";

interface iRating {
  voter: [];
  _id: string;
}
const url = "http://localhost:2233";
const Rating: React.FC<iRating> = ({ voter, _id }) => {
  console.log("data id", _id);

  const [getData, setGetData]: any = useState([]);

  const fetchData = async () => {
    const newURL = `${url}/api/user/${_id}`;
    console.log(newURL);
    await axios.get(newURL).then((res) => {
      setGetData(res.data.data.voter);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>{getData.length}</div>;
};

export default Rating;
