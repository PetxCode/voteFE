import React from "react";
import styled from "styled-components";

const OnlineComp = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Leading Results so far!</h2>
        <br />
        <Hoder>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
          <Card>
            <NameHold>
              <UserImage src="/assets/user.png" />
              <First>
                <Hol>
                  {" "}
                  <Div>Gideon ekeke</Div>
                  <span>President</span>
                </Hol>
              </First>
              <Second>
                <span>100 Votes</span>
              </Second>
            </NameHold>
          </Card>
        </Hoder>
      </Wrapper>
    </Container>
  );
};

export default OnlineComp;

const Div = styled.div`
  margin-left: 45px;
`;

const Hol = styled.div``;

const First = styled.div`
  height: 100%;
  width: 60%;
  background-color: #050794;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: white;

  span {
    margin-left: 45px;
    font-size: 12px;
  }

  /* margin-left: 40px; */
`;
const Second = styled.div`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const Hoder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  /* height: 100%;
  min-height: 300px; */
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  margin-left: 40px;
`;
const UserImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid #fbaf1b;
  background-color: white;
  /* z-index: 99; */
  position: absolute;
  margin-left: -30px;
`;
const NameHold = styled.div`
  height: 60px;
  width: 320px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  @media screen and (max-width: 960px) {
    width: 300px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin-top: 50px;
`;
const Container = styled.div`
  min-height: 400px;
  height: 100%;
  width: 100%;
  background-color: #f3f8fe;
  /* padding-left: 30px; */
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px) {
    height: 100%;

    h2 {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  /* align-items: center; */
`;
