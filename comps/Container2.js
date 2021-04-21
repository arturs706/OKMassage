import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.77fr 1.33fr 1.13fr 0.77fr;
    grid-template-rows: 100%;
    grid-template-areas: 
    ". ContainerHalf1  ContainerHalf2 .";
    height: 80vh;
    @media (max-width: 1345px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 70vh;
        margin-bottom: 14rem;
    }
     @media (max-width: 824px){
        margin-bottom: 15rem;
    }
    @media (max-height: 487px){
        height: 100vh;
        padding-bottom: 5rem;
        }
`
const ContainerHalf2 = styled.div`
    grid-area: ContainerHalf1;
    align-self: center;
    @media (max-width: 1345px) {
        text-align: justify;
        height: 60vh;
        padding: 0 20vh 5vh 20vh;}
    @media (max-width: 824px){
        width: 100%;
        padding: 3rem;
        text-align: center;}
        @media (max-height: 443px){
        padding: 0 10rem 2rem 10rem;}

`
const ContainerHalf1 = styled.div`
    grid-area: ContainerHalf2;
    align-self: center;
`

const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
    @media (max-width: 824px){
        font-size: 3.6vh;
    }
`
const Parag = styled.p `
    letter-spacing: 0.4vh;
    line-height: 1.8;
    text-align: justify;
    padding-right: 3rem;
    @media (max-width: 1345px) {
        padding-right: 0;
}
@media (max-width: 824px){
        font-size: 1.6vh;
    }
`


function Container2() {
    return (
        <div>
             <Container>
            <ContainerHalf2>
            <Fade left distance = "300px" delay = {100} duration = {3000} ssrFadeout = {true}>
           
            <Heading1>MASSAGE TYPES</Heading1><br/><br/>
            <Parag>There are over 80 known massage types out there, 
            each with its own unique characteristics. Being aware of 
            what different types of massages can do for you is an first 
            important step in maximizing the benefits you derive from it.</Parag>
            </Fade>

            </ContainerHalf2>

            <ContainerHalf1>
            <Fade right distance = "300px" delay = {100} duration = {3000} ssrFadeout = {true}>

            <Image className = "image" 
                src="/images/face.jpg" 
                alt="Image"
                width = "450"
                height = "300"
                quality ="100"
>
            </Image>
            </Fade>

            </ContainerHalf1>
            

            </Container>
            
        </div>
    )
}

export default Container2
