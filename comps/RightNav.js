import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
  flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    top: 0rem;
    left: -20.7rem;
    height: 100vh;
    width: 20rem;
    padding-top: 8.5rem;
    transition: transform 0.6s ease-in-out;
    z-index: 13;
    background: white;
`
const Li = styled.li `
    display: flex;
    align-items: center;
    list-style: none;
    letter-spacing: 0.2rem;
    font-size: 0.8rem;
    padding: 5.4rem 1.5rem 2rem 1rem;
    z-index: 1;
`
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
                <Li>HOME</Li>
                <Li>SERVICES</Li>
                <Li>FEES</Li>
                <Li>BOOK AN APPOINTMENT</Li>
                <Li>CONTACT US</Li>
    </Ul>
  )
}

export default RightNav