import React from 'react'
import styled from 'styled-components'
import Glasscard from './Glasscard'
import Carousel from "react-elastic-carousel";
import Fade from 'react-reveal/Fade';
import Data from './Data'
import BackgroundFooter from './BackgroundFooter'

const Container = styled.div `
    width: 70%;
    height: 80vh;
    border-radius: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
const MainContainer = styled.div `
    width: 100%;
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
    width: 100%;
    text-align: left;
    padding: 12rem 0rem 0rem 19rem;
    @media (max-width: 1045px) {
        padding: 12rem 0rem 0rem 11.5rem;

    }
`

const breakPoints = [
    {width: 500, itemsToShow: 2},
    {width: 800, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
    {width: 1800, itemsToShow: 4}

]


function Container4c() {
    return (
<>
        <MainContainer>

            <Heading1>            <Fade left distance = "300px" delay = {500} duration = {3000} ssrFadeout = {true}>
WOULD YOU LIKE TO TRY?            </Fade>
</Heading1>

            <Container>

            <Carousel breakPoints = {breakPoints} enableAutoPlay = {true} autoPlaySpeed = {4000} easing="cubic-bezier(0, 0.55, 0.15, 1"
  tiltEasing="cubic-bezier(0.110, 1, 1.000, 1.210)"
  transitionMs={2700}>
<BackgroundFooter/>  
            {Data.products.map((product) => {
            return(<Glasscard key={product.id} name = {product.name} image = {product.image} />
            )})}               

            </Carousel>

            </Container>

        </MainContainer>

</>
    )
}

export default Container4c
