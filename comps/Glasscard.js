import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Container = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 3rem;
    margin: 1rem;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(1.2rem);
    border-radius: 1.2rem;
    width: 20rem;
    height: 68vh;
    z-index: 12;
    position: relative;
    border: 0.1vh solid transparent;
    cursor: pointer;
    background-clip: border-box;
    align-items: center;

        }
`
const Btn = styled.div`
    padding: 2vh;
    max-width: 20vh;
    border: 0.2vh solid #ffff;
    border-radius: 1vh;
    background: transparent;
    outline: white;
    font-size: 2vh; 
    margin: 2vh;
    color: #836b51;
    font-family: 'Playfair Display', serif;
    text-align: center;

`
const Header = styled.div`
    width: 30vh;
    height: 20vh;
    font-size: 2.7vh;
    text-align: center;
    font-weight: 600;
`

const Image = styled.img`
    width: 80%;
    height: auto;
    border-radius: 50% 26% 50% 26%;
    padding: 50% 0;
`
const cardHeading = styled.h1 `
    font-size: 150%;
`
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Glasscard(props) {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1] , config: {mass: 10, tension: 300, friction: 50}}))
    return (
        <Container 
            onMouseMove = {({clientX: x, clientY: y}) =>(set({xys: calc(x, y)}))}
            onMouseLeave = {() => set({xys:[0,0,1]})}
        style ={{
            transform: prop.xys.to(trans)
        }}>
            
            <Header>{props.name}</Header>
            <Image src = {`/images/${props.image}.jpg`} alt = {props.name}></Image>
            <Btn>Enquire NOW</Btn>
        </Container>
    )
}

export default Glasscard
