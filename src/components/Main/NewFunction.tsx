import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface props {
  organisationName?: string;

  _id: string;
}
const url: string = "http://localhost:2233";

const NewFunction: React.FC<props> = ({ _id }) => {
  const [orgMember, setOrgMember] = useState([]);

  const getOrganisationMembers = async () => {
    const newURL: string = `${url}/api/organisation/${_id}/view`;

    await axios.get(newURL).then((res) => {
      setOrgMember(res.data.data.user);
    });
  };

  useEffect(() => {
    getOrganisationMembers();
  }, []);
  return (
    <div>
      <Div>
        {orgMember.map((props: any) => (
          <Profile key={props._id}>
            <Image src={props.image} />
            <ProfileName>{props.fullName}</ProfileName>
          </Profile>
        ))}
      </Div>
    </div>
  );
};

export default NewFunction;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: orange;
  object-fit: cover;
  border: 2px solid #000269;
`;

const ProfileName = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  margin-top: 10px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const MembersCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
`;
