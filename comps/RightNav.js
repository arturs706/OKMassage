import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'


const Ul = styled.ul`
  flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    top: 0rem;
    left: -20.7rem;
    height: 100vh;
    width: 20rem;
    padding-top: 10.5rem;
    transition: transform 0.6s ease-in-out;
    z-index: 13;
    background: white;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(1.2rem);

`
const Li = styled.li `
    display: flex;
    align-items: center;
    list-style: none;
    letter-spacing: 0.2rem;
    font-size: 1.4rem;
    padding: 1rem 1rem 1rem 4rem;
    z-index: 1;
`
const A = styled.a `
    cursor: pointer;`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
                <Link href="/" passHref><A><Li>HOME</Li></A></Link>
                <Link href="/services" passHref><A><Li>SERVICES</Li ></A></Link>
                <Link href="/fees" passHref><A><Li>FEES</Li></A></Link>
                <Link href="/appointment" passHref><A><Li>APPOINTMENT</Li></A></Link>
                <Link href="/contact" passHref><A><Li>CONTACT</Li></A></Link>
    </Ul>
  )
}

export default RightNav
