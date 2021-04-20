import React from 'react'
import { IconContext } from "react-icons";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiMessengerLine, RiTelegramLine, RiWhatsappLine} from "react-icons/ri";
import styled from 'styled-components'

const IconMenu = styled.div`
display: flex;
flex-direction: column;
margin: 17.9rem 11.5rem;
position: absolute;
z-index: 1;
max-width: 100rem;
@media (max-width: 1345px) {
    margin: 16.9rem 5.5rem;

    }
`


function Icons(props) {
    return (
        <IconMenu>
            <IconContext.Provider value={{className: "icon-class-name" }}>
            <a href="https://m.facebook.com/Okmassage-107617684179566/"><RiFacebookLine/></a>
            <a href="https://www.instagram.com/ksjukis/"><RiInstagramLine/></a>
            <a href="https://www.linkedin.com/"><RiLinkedinLine/></a>
            <a href="https://www.linkedin.com/"><RiMessengerLine/></a>
            <a href="https://www.linkedin.com/"><RiTelegramLine/></a>
            <a href="https://wa.link/5j5c92"><RiWhatsappLine/></a>
            </IconContext.Provider>
        </IconMenu>
    )
}

export default Icons
