import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { organisation, organisationMembers } from "../Global/GlobalState";
import { useRecoilState } from "recoil";
import NewFunction from "./NewFunction";

const url: string = "http://localhost:2233";
const ViewOrganisation = () => {
  const [org, setOrg] = useRecoilState(organisation);

  const getOrgansation = async () => {
    const newURL: string = `${url}/api/organisation`;
    await axios.get(newURL).then((res) => {
      setOrg(res.data.data);
    });
  };

  return (
    <Container>
      <Text>
        All Ratified Organsation and their Delegates eligible for Voting!!
      </Text>
      <Wrapper>
        {org.map((props: any) => (
          <Card key={props._id}>
            <Name>{props.organisationName}</Name>
            <Members>Registered Members</Members>

            <NewFunction _id={props._id} />
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ViewOrganisation;

const Text = styled.div`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`;

const Members = styled.div`
  margin-bottom: 30px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  line-height: 1;
  color: #000269;
`;

const Card = styled.div`
  padding: 10px 0;
  width: 300px;
  min-height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  margin: 10px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 200px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
