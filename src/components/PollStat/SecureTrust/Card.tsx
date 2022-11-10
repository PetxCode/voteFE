import React from 'react'

import styled from "styled-components"
import { AiFillLock } from 'react-icons/ai';

export const Card = () => {
  return (
      <Container>
          <Icon>
              <AiFillLock
                  style={{fontSize:"40px", color:"#507cb6"}}
              />   
          </Icon>
          <Title>Secure</Title>
          <Con>
              We offer the strongest possible guarantee of voter
              anonymity: we simply do not track who
              votes for what; only who votes, and what the vote is.
          </Con>
          
    </Container>
  )
}

const Icon = styled.div`
  width:100px;
  height:100px;
  border-radius:50%;
  background-color:white;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Title = styled.div`
height:50px;
color:white;
font-weight:600;
margin-bottom:10px;
margin-top:15px;
font-size:30px;
`
const Con = styled.div`
text-align:center;
color:white;
font-size:16px;
`

const Container = styled.div`
  width:310px;
  height:330px;
  flex-direction:column;
  margin:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  

`
