import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    display: grid;
    height: 100%;
    z-index: 3;
    position: relative;
    grid-template-columns: 5.4% 35% 38.6% 5.4%;
    grid-template-rows: 26% 70%;
    grid-template-areas:
   
    "Container1 Container1 Container1 Container1"
    ". Container2 Container2 .";
    row-gap: 10vh;
    column-gap: 10vh;
    height: 560vh;
    @media (max-width: 1345px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 60vh;
    }
`
const Container1 = styled.div`
    grid-area: Container1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    padding-bottom: 10vh;
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
    padding-left: 60vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
`
const Parag = styled.p `
    line-height: 3;
    text-align: justify;
`
const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
`
const Cont = styled.div `
    width: 100%;
    background-image: url(${Fees});
    background-size: cover;
    border-radius: 1vh;
    height: 1.3%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh;
    height: 1.9%;
    margin-bottom: 2vh;

`
const Cont2 = styled.div `
    width: 100%;
    background: #d0f7f4;
    border-radius: 1vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh 2vh;
    height: 1.9%;
    margin: 2vh 0;
background-image: url(${FooterPic});
background-size: cover;

`
const Cont3 = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Button = styled.button`
    padding: 1.6vh;
    max-width: 16vh;
    border: 0.2vh solid #ffff;
    border-radius: 2vh;
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
function Services() {
const [toggle, setToggle] = useState(false)
const [toggle2, setToggle2] = useState(false)
const [toggle3, setToggle3] = useState(false)
const [toggle4, setToggle4] = useState(false)
const [toggle5, setToggle5] = useState(false)
const [toggle6, setToggle6] = useState(false)
const [toggle7, setToggle7] = useState(false)
const [toggle8, setToggle8] = useState(false)

const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
}
const toggler2 = () => {
    toggle2 ? setToggle2(false): setToggle2(true);
}
const toggler3 = () => {
    toggle3 ? setToggle3(false): setToggle3(true);
}
const toggler4 = () => {
    toggle4 ? setToggle4(false): setToggle4(true);
}
const toggler5 = () => {
    toggle5 ? setToggle5(false): setToggle5(true);
}
const toggler6 = () => {
    toggle6 ? setToggle6(false): setToggle6(true);
}
const toggler7 = () => {
    toggle7 ? setToggle7(false): setToggle7(true);
}
const toggler8 = () => {
    toggle8 ? setToggle8(false): setToggle8(true);
}



    return (

<Container>
    <Container1> 
        <TitleDiv>
        

            <Heading1>Please check out our fees below </Heading1>
            
        </TitleDiv>
            </Container1>


            <Container2>    
            <Cont>
                <Heading2>Cosmetic massage</Heading2>
                <Heading2 onClick = {toggler}>+</Heading2>
             
            </Cont>

            {toggle?<Cont2>

            <Heading2>45 minutes</Heading2>

            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}
            

            <Cont>
                <Heading2>Anticellulite massage</Heading2>
                <Heading2 onClick = {toggler2}>+</Heading2>
            </Cont>

            {toggle2?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle2?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle2?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle2?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

             <Cont>
                <Heading2>Classical massage</Heading2>
                <Heading2 onClick = {toggler3}>+</Heading2>
            </Cont>

            {toggle3?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle3?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle3?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle3?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            <Cont>
                <Heading2>Massage therapy</Heading2>
                <Heading2 onClick = {toggler4}>+</Heading2>
            </Cont>

            {toggle4?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle4?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle4?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle4?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            <Cont>
                <Heading2>Relaxing massage</Heading2>
                <Heading2 onClick = {toggler5}>+</Heading2>
            </Cont>

            {toggle5?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle5?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle5?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle5?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}
            
            <Cont>
                <Heading2>Stone Therapy</Heading2>
                <Heading2 onClick = {toggler6}>+</Heading2>
            </Cont>

            {toggle6?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle6?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle6?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle6?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            <Cont>
                <Heading2>Lymphatic drainage massage</Heading2>
                <Heading2 onClick = {toggler7}>+</Heading2>
            </Cont>

            {toggle7?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle7?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle7?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle7?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            <Cont>
                <Heading2>Aromatherapy</Heading2>
                <Heading2 onClick = {toggler8}>+</Heading2>
            </Cont>

            {toggle8?<Cont2>
            <Heading2>45 minutes</Heading2>
            <Heading2>40£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle8?<Cont2>
            <Heading2>60 minutes</Heading2>
            <Heading2>50£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle8?<Cont2>
            <Heading2>75 minutes</Heading2>
            <Heading2>70£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}

            {toggle8?<Cont2>
            <Heading2>90 minutes</Heading2>
            <Heading2>80£</Heading2>
            <Button>Book this in</Button>
            </Cont2>:null}




            </Container2>
            
        </Container>
    )
}

export default Services
