import React from "react";
import styled from "styled-components";
import AreaChart from "./Charts/AreaChart";
import VerticalBar from "./Charts/VerticalBar";

const ChartHold = () => {
  return (
    <Container>
      {/* Vertical and Area Chat */}
      <Holder>
        <HoldBox>
          <VerticalBar />
        </HoldBox>
        <HoldBox>
          <AreaChart />
        </HoldBox>
      </Holder>
      {/* Area and Vertical Chart */}

      <Holder>
        <HoldBox>
          <AreaChart />
        </HoldBox>
        <HoldBox>
          <VerticalBar />
        </HoldBox>
      </Holder>
    </Container>
  );
};

export default ChartHold;

const Container = styled.div``;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const HoldBox = styled.div`
  width: 48%;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
