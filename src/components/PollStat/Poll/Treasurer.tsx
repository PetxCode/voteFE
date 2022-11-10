import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"

const Treasurer = () =>
{
    
      const [isActive, setIsActive] = React.useState<boolean>(false)
      const schema = yup.object().shape({
        president: yup.string().required("you've vote yet!!!🚫🚫"),
    })

    const {register, handleSubmit, formState:{errors},reset } = useForm({
        resolver: yupResolver(schema),
    })

    const voteNow = handleSubmit( async (data) =>
    {
        console.log(data)
    })
  return (
      <div>
           
                  <Divc >
                      <Mydrop>
                          <Catcon>
                             Treasurer <span><IoIosArrowDropdownCircle /></span>
                          </Catcon>
                          <Top>Leading Candidate</Top>
                           <Sin>
             <TopCon>
                              <ImgCon src="/assets/profilephoto.jfif" />
                              <Namepo>
                                  Anyamah Edwin
                                 <Loading>
                              <Dbar></Dbar>
                              <pre>79%</pre>

                              
                                </Loading>
                              </Namepo>
                          </TopCon>
                          <TopCon>
                              <ImgCon src="/assets/2.jpg" />
                              <Namepo>
                                  David Banks jude
                                 <Loading>
                              <Dbar1></Dbar1>
                              <pre>59%</pre>

                              
                                </Loading>
                              </Namepo>
                          </TopCon>

          </Sin>
                      </Mydrop>
                      
                      
                        <DropCon>
                          <form onSubmit={voteNow}>
                      <DropItem>
                          <input
                              type="radio"
                              id="item1"
                              value="okon Maduka"
                            {...register('president', { required: true })}
                          />
                          <Label htmlFor="subscribeNews">
                              <DivCan>
                                  <ImaCan src="/assets/profilephoto.jfif"/>
                                  <DivDe>
                                      Anyamah Edwin
                                      <pre>Co-ordinator </pre>
                                  </DivDe>
                                  
                            </DivCan>
                          </Label>
                        </DropItem>
                      <DropItem>
                          <input
                              type="radio"
                              id="item1" 
                              value="edwin Anyamah"
                              {...register('president', { required: true })}
                          />
                           <Label htmlFor="subscribeNews">
                              <DivCan>
                                  <ImaCan src="/assets/1.jpg"/>
                                  <DivDe>
                                      Okon peter
                                      <pre>Co-ordinator </pre>
                                  </DivDe>
                                  
                            </DivCan>
                          </Label>
                        </DropItem>
                      <DropItem>
                          <input
                              type="radio"
                              id="item1"
                              value="Issace success"
                              {...register('president', { required: true })}
                          />
                            <Label htmlFor="subscribeNews">
                              <DivCan>
                                  <ImaCan src="/assets/2.jpg"/>
                                  <DivDe>
                                      Divido banks
                                      <pre>Co-ordinator </pre>
                                  </DivDe>
                                  
                            </DivCan>
                          </Label>
                      </DropItem>
                      <Error>{ errors?.president && "please cast your vote⚠️⚠️"}</Error>
                        <DropItem>
                            <Button type="submit">Vote</Button>
                        </DropItem>
                       </form>
                        </DropCon>
                      
                     
                      
                  </Divc>
    </div>
  )
}

export default Treasurer

const Sin = styled.div`
display:flex;
width:100%;
display:flex;
justify-content:space-between;
`

const Button = styled.button`
  width:100px;
  height:30px;
  background-color:#050794;
  color:white;
  border:none;
  border-radius:6px;
  font-weight:600; 
`

const Label = styled.label`
margin-top:3px;
`

const DivCan = styled.div`

line-height:5px;
display:flex;
margin-left:5px;

`
const ImaCan = styled.img`
width:35px;
height:35px;
border-radius:4px;
object-fit:cover;
`
const DivDe = styled.div`
margin-left:5px;
margin-top:5px;
`

const Error  = styled.div`
color:red;
margin-top:-5px;
`
const Dbar = styled.div`
width:60px;
height:7px;
background-color:green;
border-radius:6px;
`
const Dbar1 = styled.div`
width:60px;
height:7px;
background-color:#f9a603;
border-radius:6px;
`

const Loading = styled.div`
  display:flex;
  align-items: center;
  height:11px;

  pre{
    margin-left:5px;
  }

`

const Namepo = styled.div`
display:flex;
flex-direction:column;
font-size:12px;
margin-left:5px;
font-weight:600;
margin-top:-2px;
pre{
    font-weight:200;
}
`
const ImgCon = styled.img`
width:30px;
height:30px;
border-radius:50%;
object-fit:cover;
background-color:grey;

`

const Top = styled.div`
width:100%;
font-weight:500;
color:#fbaf1b;


`

const Catcon = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:100%;
font-weight:600;
color:#050794;
`

const TopCon = styled.div`
display:flex;
width:100%;
margin-top:10px;

`

const Mydrop = styled.div`
padding:10px;
background-color:white;
font-width:700;
use-select:none;
color:#333;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display:flex;
align-items: center;
justify-content: space-between;
transtion:all 500ms;
flex-direction: column;
animation: sweep .5s ease-in-out;

@keyframes sweep {
  0%    {opacity: 0; transform: translateX(-10px)}
  100%  {opacity: 1; transform: translateX(0)}
}

span{
    margin-top:5px;
}
`

const DropItem = styled.div`
padding:10px;
transtion:all 0.2s;
display:flex;


:hover{
    background-color:#f4f4f4;
}

@media screen and (max-width: 800px) {
   padding-left:0px;
  
    
    
}
`


const Divc = styled.div`
width:87%;
margin:10px auto;


position:relative;


@media screen and (max-width: 800px) {
    width:90%;
   
    
    
}
`

const DropCon  = styled.div`
// position:absolute;
top:110%;
padding:9px;
background-color:whitesmoke;
font-width:700;
color:#333;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
left:0;
width:94%;
transtion:all 500ms;


animation: sweep .5s ease-in-out;

@keyframes sweep {
  0%    {opacity: 0; transform: translateX(-5px)}
  100%  {opacity: 1; transform: translateX(0)}
}


@media screen and (max-width: 800px) {
   padding:8px;
   
    
    
}
`