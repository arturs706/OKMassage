import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const DivStyle = styled.div `
    width: 0.2rem;
    height: 3.2rem;
    position: fixed;
    top: 0.9rem;
    left: 3rem;
    padding-right: 4.5rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999;
    cursor: pointer;
    @media (max-width: 824px) {
        height: 2.5rem;
        top: 0.7rem;
        left: 1.5rem;

    }

    div {
        width: 3rem;
        height: 0.3rem; 
        background-color: ${({ open }) => open ? '#000' : '#000'};
        border-radius: 20rem;
        transform-origin: -5px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(405deg)' : 'rotate(0)'};
            transition: all 0.5s linear;
            width: 2.4rem;
            height: 0.25rem;
            background: #836b51;


        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
            width: 3rem;
            background: #48b986;
            height: 0.25rem;

        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-405deg)' : 'rotate(0)'};
            transition: all 0.5s linear;
            width: 2.4rem;
            background: #836b51;
            height: 0.25rem;

        }
        
    }
`


function Burger() {
    const [open, setOpen] = useState(false)
    return (

            <div>

                <DivStyle open={open} onClick = {() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
                </DivStyle>

                <RightNav open={open}/>
            </div>

    )
}

export default Burger
