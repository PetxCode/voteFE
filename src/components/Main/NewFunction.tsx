import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { organisationMembers } from "../Global/GlobalState";
import { useRecoilState } from "recoil";

interface props {
  //   organisationName?: {};
  //   president?: {}[];
  //   vicePresident?: {}[];
  //   legal?: {}[];
  //   pro?: {}[];
  //   secretary?: {}[];
  //   socialSecretary?: {}[];
  //   voter?: {}[];
  //   orgName?: string;
  //   orgEmail?: string;
  //   fullName?: string;
  //   email: string;
  //   password: string;
  //   image?: string;
  //   voteCode?: string;
  //   token?: string;
  //   verified?: boolean;
  //   superAdmin?: boolean;
  //   _doc: {};
  _id: string;
}
const url: string = "http://localhost:2233";

const NewFunction: React.FC<props> = ({ _id }) => {
  const [orgMember, setOrgMember] = useRecoilState(organisationMembers);

  const getOrganisationMembers = async () => {
    const newURL: string = `${url}/api/organisation/${_id}/view`;
    console.log(newURL);
    await axios.get(newURL).then((res) => {
      console.log("data: ", res.data.data.user);
      setOrgMember(res.data.data.user);
    });
  };

  //   console.log("data: ", orgMember);

  useEffect(() => {
    getOrganisationMembers();
  }, []);
  return (
    <div>
      <MembersCard>
        {orgMember.map((props: any) => (
          <Profile key={props._id}>
            <Image src={props.image} />
            <ProfileName>{props.fullName}</ProfileName>
          </Profile>
        ))}
      </MembersCard>
    </div>
  );
};

export default NewFunction;

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
