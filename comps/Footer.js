import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiMessengerLine, RiTelegramLine, RiWhatsappLine} from "react-icons/ri";
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import BackgroundFooter from './BackgroundFooter'
 

const Foot = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 42vh;
    z-index: 12;
    flex-wrap: wrap;
    position: absolute;
    @media (max-width: 1440px) {
}
`
const Parag = styled.p `
    display: flex;
    flex-direction: row;
    line-height: 4vh;
    h3 {
        color: #b36b51;
    }
    color: #b59771; 
    `

const Divider = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    padding-right: 10rem;
    `
const Divider1 = styled.div `
display: flex;
flex-direction: column;
width: 100%;
height: 40vh;
padding-right: 10rem;
@media (max-width: 980px) {
    display: none;
}
`
const Links = styled.div `
    padding-top: 4vh;
`

function Footer() {
    return (
        <div>

            <Foot>
            <BackgroundFooter/>
            <Fade left distance = "300px" delay = {100} duration = {3000} ssrFadeout = {true}>
                <Divider><h3>SOCIAL MEDIA</h3>

                <Links>
                <IconContext.Provider value={{className: "icon-class-name-footer" }}>
                <Parag><a href="https://m.facebook.com/Okmassage-107617684179566/"><RiFacebookLine/></a>Facebook</Parag>
                <Parag><a href="https://www.instagram.com/ksjukis/"><RiInstagramLine/></a>Instagram</Parag>
                <Parag><a href="https://www.linkedin.com/"><RiLinkedinLine/></a>LinkedIn</Parag>
                <Parag><a href="https://www.linkedin.com/"><RiMessengerLine/></a>Messanger</Parag>
                <Parag><a href="https://www.linkedin.com/"><RiTelegramLine/></a>Telegram</Parag>
                <Parag><a href="https://wa.link/5j5c92"><RiWhatsappLine/></a>WhatsApp</Parag>
                </IconContext.Provider>
                </Links>
                </Divider>
            </Fade>

            <Fade left distance = "300px" delay = {200} duration = {4000} ssrFadeout = {true}>
                <Divider1><h3>ABOUT</h3>
                <Links>
                <Parag><Link href="/about">About Us </Link></Parag>
                <Parag><Link href="/privacy">Privacy Policy </Link></Parag>
                </Links>
                </Divider1>
                
            </Fade>

            <Fade left distance = "300px" delay = {300} duration = {5000} ssrFadeout = {true}>
                <Divider>            
                <h3>CONTACT</h3>
                <Links>
                <IconContext.Provider value={{className: "icon-class-name-footer" }}>
                <Parag><a href="tel:+447425278919"><AiOutlinePhone/></a> +447425278919</Parag>
                <Parag><a href="https://goo.gl/maps/JUqu52GanGLYco3Z8"><IoLocationOutline/></a>West End Lane, Barnet, EN5 2SA</Parag>
                <Parag><a href="mailto:ksjukis@gmail.com"><BsEnvelope/></a>ksjukis@gmail.com</Parag>
                </IconContext.Provider>
                </Links>

                </Divider>

            </Fade>

            </Foot>

        </div>
    )
}

export default Footer
