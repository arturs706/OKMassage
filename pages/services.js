import React from 'react'
import styled from 'styled-components'
import Data from '../comps/Data'
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    display: flex;
    height: 100%;
    z-index: 3;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 10vh;
`

const Container1 = styled.div`
    grid-area: Container1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10vh;
`
const Container2 = styled.div`
    grid-area: Container1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 3% 3% 0 10.3%;
`
const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
    width: 100%;
    text-align: left;
`
const Image = styled.img`
    width: 80%;
    height: auto;
    border-radius: 50% 26% 50% 26%;
    padding: 4% 0;
`
const TitleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    padding-left: 10.3%;
`
const Parag = styled.p `
    line-height: 3;
    text-align: justify;
    padding-top: 6%;
`
const ProductName = styled.h2 `
    font-size: 200%;
    padding-bottom: 5%;
`
function services() {
    return (
<>
<Container>

<Fade bottom distance = "300px" delay = {500} duration = {1000} ssrFadeout = {true}>

    <Container1> 
        <TitleDiv>
            <Heading1>Treat Yourself No Matter What </Heading1>
            <br/>
            <Heading1>Check out what we are offering today</Heading1>
        </TitleDiv>
    </Container1>
    </Fade>

    {Data.products.map((product) => {
        return(
        <Container2 key={product.id}>
            <Fade bottom distance = "300px" delay = {product.id*100} duration = {product.id*1000} ssrFadeout = {true}>
            <ProductName > {product.name} </ProductName>
            </Fade>
            <Fade bottom distance = "300px" delay = {product.id*100} duration = {product.id*1000} ssrFadeout = {true}>
            <Image src = {`/images/${product.image}.jpg`} alt = {product.name} key={product.id}/>
            </Fade>
            <Fade bottom distance = "300px" delay = {product.id*100} duration = {product.id*1000} ssrFadeout = {true}>
            <Parag > {product.description} </Parag>
            </Fade>
        </Container2>)   
        })}

        </Container>
    </>
    )
}

export default services
