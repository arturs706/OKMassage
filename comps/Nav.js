import React from 'react'
import Link from 'next/link'
import Burger from './Burger'
import Background from './Background'
import Icons from './Icons'
import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import styled from 'styled-components'

const Ul = styled.ul `
    display: inline-flex;
    list-style: none;
    width: 83%;
    position: absolute;
    left: 10rem;
    padding-top: 1.6rem;
    z-index: 100;
    @media  (max-width: 1045px) {
        width: 50%;
    }
`
const Li = styled.li` 

display: inline;
list-style: none;
letter-spacing: 0.2rem;
font-size: 1rem;
padding: 0 1.5rem;
z-index: 1;
@media  (max-width: 1045px) {
        display: none;}
`

const A = styled.a `
    padding: 5.4 rem;
    cursor: pointer;`

const P = styled.p `
letter-spacing: 0.4rem;
    font-size: 1.6rem;
    line-height: 2;
    max-width: 30rem;
    @media  (max-width: 1045px) {
        display: none;
    }

`
const Line = styled.div`
    width: 28.2rem;
    height: 0.1vh;
    background: black;
    position: absolute;
    left: 12rem;
    top: 33rem;
  @media  (max-width: 1045px) {
        display: none;
    }
    @media (max-width: 1345px) {
    left: 11.4rem;
}
`
const Title = styled.div `
   width: 55rem;
    height: 70%;
    padding: 12rem 0rem 0rem 11.5rem;
    display: flex;
    top: 7vh;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    @media  (max-width: 1045px) {
        display: none;
        padding: 12rem 0rem 0rem 9rem;
        width: 34rem;
    }
    @media (max-width: 1345px) {
        padding: 12rem 0rem 0rem 11.4rem;
    }
`

const Container = styled.div `
    width: 100%;
    height: 100vh;
`
const Span = styled.span `
    font-weight: 500;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    @media (max-width: 1045px) {
        display: none;
    }
`
const Ulhead = styled.ul `
    display: none;
    position: absolute;
    z-index: 2;
    @media  (max-width: 1045px) {
        display: flex;
        position: absolute;
        z-index: 2;
        width: 98%;
        justify-content: flex-end;
        align-items: center;
    }
`
const Spantwo = styled.span `
    display: none;
    @media  (max-width: 1045px) {
        display: flex;
        font-size: 4.4vh;
        width: 50%;
        font-weight: 900;
        margin-bottom: 1rem;
    }
    @media  (max-width: 530px) {
        font-size: 2rem;
        padding-top: 0.45rem;
        padding-right: 0.1rem;
    }
    @media  (max-width: 410px) {
        font-size: 1.6rem;
        margin-top: 0.5rem;

    }
`













const Nav = () => {
    return (
        <Container>
            <Background/>
            <Ul> 
                <Burger/>        
                <Link href="/" passHref><A><Li>HOME</Li></A></Link>
                <Link href="/services" passHref><A><Li>SERVICES</Li ></A></Link>
                <Link href="/fees" passHref><A><Li>FEES</Li></A></Link>
                <Link href="/appointment" passHref><A><Li>BOOK AN APPOINTMENT</Li></A></Link>
                <Link href="/contact" passHref><A><Li>CONTACT US</Li></A></Link>
            </Ul>  

            <Ulhead>
            <Spantwo>OK = massage</Spantwo>
            <div>
            <IconContext.Provider value={{className: "icon-class-name-head" }}>
            
            <AiOutlineMail/>
            <AiOutlinePhone/>
            </IconContext.Provider>
            </div>
            </Ulhead>


            <Title>

<Span>OK = massage</Span>
<br/>

<P>Mobile massage therapist based in North London</P>

</Title>

<Line/>
<Icons />
</Container>
    )
}

export default Nav
