import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.77fr 1.13fr 1.33fr 0.77fr;
    grid-template-rows: 100%;
    grid-template-areas: 
    ". ContainerHalf1  ContainerHalf2 .";
    height: 80vh;
        @media (max-width: 1345px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        height: 80vh;
}
@media (max-height: 443px){
        width: 100%;
        padding-top: 24rem;
        text-align: center;
        height: 105vh;
    }
`
const ContainerHalf1 = styled.div`
    grid-area: ContainerHalf1;
    align-self: center;
`
const ContainerHalf2 = styled.div`
    grid-area: ContainerHalf2;
    align-self: center;
    @media (max-width: 1345px) {
        text-align: justify;
        height: 60vh;
        padding: 0 20vh 5vh 20vh;}
    @media (max-width: 824px){
        width: 100%;
        padding: 3rem;
        text-align: center;
    }
    @media (max-height: 443px){
        padding: 0 10rem 2rem 10rem;}
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
    @media (max-width: 824px){
        font-size: 1.6vh;
    }
`


function Container3() {
    return (
        <div>
            <Container>

            <ContainerHalf1>            
                <Fade bottom distance = "300px" delay = {500} duration = {3000} ssrFadeout = {true}>
                <Image className = "image" 
                src="/images/oilmassage.webp" 
                alt="Image"
                width = "450"
                height = "300"
                quality ="100"
                
>
            </Image>           
                </Fade>
            </ContainerHalf1>


            <ContainerHalf2>
            <Fade right distance = "300px" delay = {500} duration = {3000} ssrFadeout = {true}>

            <Heading1>MASSAGE</Heading1>
            <br/><br/>            
           
                <Parag>Hardly anyone who doesn't know what 
                a massage is? Depending on the type 
                of exposure, this procedure can both 
                completely relax the body and prepare 
                it for serious stressful situations</Parag>
                </Fade>

            </ContainerHalf2>

            </Container>
            
        </div>
    )
}

export default Container3
