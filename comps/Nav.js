import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import Burger from './Burger'
import Background from './Background'
import Icons from './Icons'

const Nav = () => {
    return (
        <div className = {styles.container}>
            <Background/>
            <ul className = {styles.ul}> 
                <Burger/>        
                <Link href="/" passHref><a><li className = {styles.li}>HOME</li></a></Link>
                <Link href="/services" passHref><a><li className = {styles.li}>SERVICES</li ></a></Link>
                <Link href="/fees" passHref><a><li className = {styles.li}>FEES</li></a></Link>
                <Link href="/appointment" passHref><a><li className = {styles.li}>BOOK AN APPOINTMENT</li></a></Link>
                <Link href="/contact" passHref><a><li className = {styles.li}>CONTACT US</li></a></Link>
            </ul>  
            <div className = {styles.title}>

<span className = {styles.span}>OK = massage</span>
<br/>

<p className = {styles.p}>Mobile massage therapist based in North London</p></div>

<div className = {styles.line}/>
<Icons />
        </div>
    )
}

export default Nav
