import styled from "styled-components";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { MdHowToVote } from "react-icons/md";
import ChartHold from "./ChartHold";

const VoteScreen = () => {
  return (
    <Container>
      <Wrapper>
        <h5>Dashboard</h5>
        <SubHead>
          <span>Candidate and Voters chart</span>
          {/* <span>Voters</span> */}
        </SubHead>
        <TopBox>
          <InnerBox>
            <IconHold bg="#000269">
              <CgOrganisation color="#fff" />
            </IconHold>
            <span> 55 </span>
            <small>Total Organisation</small>
          </InnerBox>
          <InnerBox>
            <IconHold bg="green">
              <MdHowToVote color="#fff" />
            </IconHold>
            <span> 21 </span>
            <small>Total Candidates</small>
          </InnerBox>
          <InnerBox>
            <IconHold bg="red">
              <FaChalkboardTeacher color="#fff" />
            </IconHold>
            <span> 125 </span>
            <small>Total Delegates</small>
          </InnerBox>
        </TopBox>
        <ChartHold />
      </Wrapper>
    </Container>
  );
};

export default VoteScreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 90%;
`;

const SubHead = styled.div`
  height: 50px;
  width: 100%;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    font-size: 13px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const InnerBox = styled.div`
  height: 120px;
  width: 295px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  span {
    font-weight: 700;
  }
  small {
    font-size: 11px;
  }

  @media (max-width: 800px) {
    margin: 10px 0;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 10px;
  }
`;

const IconHold = styled.div<{ bg: string }>`
  margin: 0 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
