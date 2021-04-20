import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Data from '../comps/Data'
import BackgroundFooter from '../comps/BackgroundFooter'

const Container = styled.div`
    display: grid;
    height: 100%;
    z-index: 33;
    position: relative;
    padding-top: 10vh;
    grid-template-columns: 5.4% 35% 38.6% 5.4%;
    grid-template-rows: 7% 93%;
    grid-template-areas:
   

    ". Container1 Container1 ."
    ". Container2 Container2 .";
    row-gap: 10vh;
    column-gap: 10vh;

`
const Container1 = styled.div`
    grid-area: Container1;
    height: 100%;
    width: 100%;
    padding-bottom: 1vh;

`
const Container2 = styled.div`
    grid-area: Container2;
    align-self: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
`
const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
`
const Cont = styled.div `
    width: 77vw;
    height: 8vh;
    border-radius: 1vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh;
    margin-bottom: 2vh;

`
const Cont2 = styled.div `
    width: 77vw;
    background: #d0f7f4;
    border-radius: 1vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh 2vh;
    height: 6.5vh;
    margin: 1vh 0;

`
const Button = styled.button`
    padding: 1.6vh;
    max-width: 16vh;
    border: 0.2vh solid #ffff;
    border-radius: 1vh;
    background: transparent;
    outline: white;
    align-items: center;
    font-size: 2.4vh; 
    margin: 2vh;
    color: #836b51;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
`
const Heading2 = styled.h3`
    color: #836b51;
`
const {products} = Data;

function fees() {
const [toggled,toggle] = useState({})
useEffect(() => {console.log({toggled}); }, [toggled]);

    return (
        <>

    <Container>
    <Container1> 
        <TitleDiv>
            <Heading1>Please check out our fees below </Heading1>
        </TitleDiv>
    </Container1>

   <Container2>
   {Data.products.map((product) => {
        return(
            <div>
                
            <Cont key ={product.id}><Heading2>{product.name}</Heading2>
            <Button onClick={() => toggle(toggled => ({...toggled, [product.id]: !toggled[product.id]}))}>+</Button></Cont>
            {toggled[product.id] && <Cont2> <Heading2>Duration: {product.duration45} </Heading2><Heading2> Price: {product.price45}</Heading2> <Button> Book this in </Button> </Cont2>}
            {toggled[product.id] && <Cont2> <Heading2>Duration: {product.duration60} </Heading2><Heading2>Price: {product.price60} </Heading2><Button> Book this in </Button> </Cont2>}
            {toggled[product.id] && <Cont2> <Heading2>Duration: {product.duration75} </Heading2><Heading2>Price: {product.price75} </Heading2><Button> Book this in </Button> </Cont2>}
            {toggled[product.id] && <Cont2> <Heading2>Duration: {product.duration90} </Heading2><Heading2>Price: {product.price90} </Heading2><Button> Book this in </Button> </Cont2>}



            </div>
        )})}
    </Container2>


            
  
    </Container>
    </>

    )}
export default fees