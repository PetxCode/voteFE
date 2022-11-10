import React from 'react'
import styled from "styled-components"


const Also = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <img src="/assets/works-onsite.png"/>
         </First>
        <Second>
          <Title>Also Works On-Site</Title>
          <Line></Line>
          <Content>
            <p>OpaVote makes it super easy to combine
              having on-site and offsite voters in your election.
            </p>
            <p>By using single-use code voters (which also come in handy when spouses share the same email address), you can have voters who can make it to your venue(s) cast their vote in booths using PCs or tablets, and voters who can't make it cast their vote by email on their own devices. Once the voting ends,
              OpaVote will provide you with the final count directly, without any manual steps on your part.
            </p>
            <p>See our blog post on using OpaVote for on-site elections for more detailst any manual steps on your part.
            </p>
          </Content>
         </Second>
      </Wrapper>
    </Container>
  )
}

export default Also

const Title = styled.div`
height:50px;
display:flex;
align-items: center;
color:#32436D;
font-size:40px;
font-weight:600;
margin-top:50px;

@media screen and (max-width: 600px) {
    font-size:30px;
    font-weight:700;
   
    }
`
const Line = styled.div`
width:350px;
height:1px;
background-color:#32436D;
margin-top:20px;


@media screen and (max-width: 600px) {
    width:200px;
    margin-top:5px;
   
    }
`
const Content = styled.div`

p{
 font-size:17px;
  color:#3D486F;
  font-weight:400;
}
`

const First = styled.div`

width:600px;
height:500px;

img{
  object-fit:contain;
  width:93%;
  height:98%;

  animation: waveanim 1s linear infinite alternate;
	@keyframes waveanim {
		0% {
			transform: translate(0, 0) rotate(0);
		}
		100% {
			transform: translate(2px, 2px) rotate(1deg);
		}
	}
  
}

@media screen and (max-width: 600px) {
    width:90%;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    }

    animation: waveanim 1s linear infinite alternate;
	@keyframes waveanim {
		0% {
			transform: translate(0, 0) rotate(0);
		}
		100% {
			transform: translate(2px, 2px) rotate(1deg);
		}
	}
`
const Second = styled.div`
width:600px;
height:500px;




@media screen and (max-width: 600px) {
    width:90%;
    height:auto;
   
   
    
    }

`

const Wrapper = styled.div`
 width:1200px;
 height:auto;
 display: flex;
 flex-wrap: wrap;


 justify-content: center;
 align-items: center;


@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    padding-bottom:30px;
    flex-wrap:wrap-reverse;
    
    }

`

const Container = styled.div`
background-color:#F2F2F2;
width:100%;
height:auto;
display:flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 600px) {
    width:100%
    height:auto;
    
    }
`