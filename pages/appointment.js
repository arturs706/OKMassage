import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { IconContext } from "react-icons";
import { BsClockHistory, BsWallet } from "react-icons/bs";

const Container = styled.div`
    display: grid;
    height: 290vh;
    z-index: 33;
    position: relative;
    padding-top: 10vh;
    grid-template-columns: 10% 30% 38.6% 5.4%;
    grid-template-rows: 10% 35% 22% 40%;
    grid-template-areas:
   

    ". Container1 Container1 ."
    ". Container2 Container2 ."
    ". Container3 Container3 ."
    ". Container4 Container4 .";
`
const Container1 = styled.div`
    grid-area: Container1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    justify-content: center;
    flex-direction: column;
`
const Container3 = styled.div`
    grid-area: Container3;
    align-self: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container4 = styled.div`
    grid-area: Container4;
    align-self: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Heading2 = styled.h2`
    text-align: left;
    width: 100%;
    
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
const Button = styled.button`
    padding: 1.6vh;
    max-width: 16vh;
    border: 0.2vh solid #ffff;
    border-radius: 1vh;
    outline: white;
    align-items: center;
    font-size: 2.4vh; 
    margin: 2vh 0;
    color: #836b51;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
`
const Li = styled.div `
    list-style: none;
    margin: 1vh;
    font-size: 2.5vh;
    font-weight: 600;
    width: 100%;
    padding: 1rem;

`
const Parag = styled.p `
    font-size: 1.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    height: auto;
    text-align: justify;
    `

function appointment() {
    return (
        <>
<Container>
    <Container1> 
        <TitleDiv>
        

            <Heading1>Book an appointment with us </Heading1>
            

        </TitleDiv>
    </Container1> 
    <Container2>
    <IconContext.Provider value={{className: "icon-class-name-cont4" }}>
    <Parag><BsWallet/>Costs starting from £45</Parag>
    <Parag><BsClockHistory/>Duration of an appointment - from 45 minutes </Parag>
                <Button>Book this in</Button>

    </IconContext.Provider>

    </Container2> 
    <Container3>
        <Heading2>What to tell the therapist during the appointment and how to prepare</Heading2>
        <br/>
        <Parag>On the eve of the session, you should not overeat;
    It is better to limit yourself with a light breakfast 2 hours before the procedure.
    Jewelry must be removed before the massage. 
    The masseur needs to be informed about any problems with well-being. 
    The procedure should not be carried out in the presence of fever or malaise. 
    The therapist also needs to know about any presence of pain, discomfort, abrasions and wounds on the body.</Parag>
    </Container3>

    <Container4>
    <Heading2>What does a massage therapist treat?</Heading2>
    <br/>
    <Parag>Indications for massage therapy include a wide range of pathologies. 
    The need for the procedure is determined by the doctor, taking into account the clinical situation and contraindications.
    Therapeutic massage is indicated for</Parag>
    <Li>
    Headaches
    <br/>
    Hyositis
    <br/>
    Osteochondrosis
    <br/>
    Functional disorders after trauma
    <br/>
    Joint diseases
    <br/>
    Neuritis
    <br/>
    In the rehabilitation period after a heart attack, stroke with other pathologies
    </Li>

    </Container4>

</Container>
</>
    )
}

export default appointment
