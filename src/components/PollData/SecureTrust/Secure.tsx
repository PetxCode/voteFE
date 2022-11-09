import React from 'react'

import styled from "styled-components"
import { Card } from './Card'



const Secure = () => {
  return (
    <Container>
      <Wrapper>
        <ConTitle>
          Secure and Trustworthy
        </ConTitle>
        <Line></Line>
        <CardCon>
          <Card/>
          <Card/>
          <Card/>

        </CardCon>

      </Wrapper>
      
     </Container>
  )
}

export default Secure

const Line = styled.div`
width:350px;
height:1px;
background-color:white;
margin-top:10px;
margin-bottom:0px;



@media screen and (max-width: 600px) {
    width:200px;
    margin-top:5px;
   
    }
`

const ConTitle = styled.div`
text-align:center;
font-size:35px;
font-weight:600;
color:white;
margin-top:50px;

@media screen and (max-width: 600px) {
     font-size:25px;
    
    }
`

const CardCon = styled.div`
height:auto;
width:auto;

display:flex;
flex-wrap:wrap;
justify-content: center;
align-items: center;




@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    
    }
`

const Wrapper = styled.div`
  width:1200px;
  height:auto;
  display:flex;
  flex-direction: column;
 align-items: center;
 overflow: hidden;

 

  
@media screen and (max-width: 600px) {
    width:100%
    height:auto;
    
    }
`

const Container = styled.div`
background-color: #507cb6;
width:100%;
height:auto;
display:flex;
justify-content: center;
align-items: center;
padding-bottom:30px;


@media screen and (max-width: 600px) {
    width:100%
    height:auto;
    
    }
`