import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { BsCalendar } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Fade from 'react-reveal/Fade';
import { Formik, Form as FForm, FastField as Ffield, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import BackgroundFooter from './BackgroundFooter'

const Heading1 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
    width: 100%;
    text-align: left;
    padding: 12rem 0rem 2rem 19rem;
    @media (max-width: 1245px) {
        padding: 12rem 0rem 3rem 1rem;
    }

    @media (max-width: 1045px) {
        padding: 12rem 0rem 2rem 0rem;}
    @media (max-width: 824px){
    padding: 0;
    text-align: center;
}
    @media (max-width: 824px){
    padding: 0;
    text-align: center;
    font-size: 3.6vh;
    }
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1245px) {
        height: 140vh;
        padding-left: 14rem;
        }
    @media (max-width: 824px){
        padding: 0;
        padding-left: 3rem;
        overflow: hidden;
    }
    @media (max-height: 540px){
        height: 130vh;
        margin-bottom: 5rem;
}


`
const Parag = styled.p `
    font-size: 1.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    min-width: 30vh;
    max-width: 120vh;
    height: auto;
    margin-right: 1rem;

    `
const Form = styled(FForm) `
max-width: 80vh;
border-radius: 2vh;
height: 43vh;
padding: 1rem;
letter-spacing: 0.4vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 3vh;
@media (max-width: 650px) {
    width: 22rem;
    height: 60vh;
    justify-content: center;
}
`

const Heading2 = styled.span `
    font-weight: 900;
    font-size: 4.2vh;
    letter-spacing: 1.1vh;
    padding-bottom: 1vh;
    text-align: center;
`

const Field = styled(Ffield) `
    padding: 0.5rem;
    border: none;
    margin-right: 1rem;
    height: 5vh;
    width: 25vh;
    font-size: 1.9vh;

`
const Input2 = styled.button`
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
    cursor: pointer;
    @media (max-width: 650px) {
        display: flex;
        justify-content: center;
    }
`

const Field2 = styled(Ffield)`
    padding: 0.5rem;
    border: none;
    height: 18.2vh;
    width: 34vh;
    font-size: 1.9vh;    
    font-size: 1.9vh;
    @media (max-width: 650px) {
        display: flex;
        justify-content: center;
}
`

const Inside = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vh;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
}
`

const NameSurnEmail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vh;
    height: 19vh;
    @media (max-width: 650px) {
        padding-left: 3.5rem;
        height: 25vh;
    }
`

const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
}

const onSubmit = values => {
    console.log('formd values', values)}

const validationSchema = Yup.object ({
    firstname: Yup.string().required('Required!'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required'),
    
})

function FormContainer() {



    return (
        <div>

            <MainContainer>
            <Heading1><Fade right distance = "300px" delay = {500} duration = {3000} ssrFadeout = {true}>BOOK AN APPOINTMENT?</Fade></Heading1>

            <Container>
            <IconContext.Provider value={{className: "icon-class-name-cont4" }}>
            <div>
                            
            <Fade bottom distance = "300px" delay = {500} duration = {4000} ssrFadeout = {true}>
                <Parag><FiPhoneCall/>Contact us by phone or use the contact form</Parag>
            </Fade>  
            <Fade bottom distance = "300px" delay = {1000} duration = {5000} ssrFadeout = {true}>
            <Parag><BsCalendar/>Select your program and specify the day, time and address </Parag>
            </Fade>  
            </div>

            <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
            >

            <Fade bottom distance = "300px" delay = {100} duration = {3000} ssrFadeout = {true}>
            <Form>
            <Heading2>CONTACT US</Heading2>
                <br/>

                <Inside>

                    <NameSurnEmail>
                <Field type="text" id="fname" name="firstname" placeholder="Your name.." />
                <ErrorMessage name = "firstname"/>

                <br/>
                
                <Field type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <ErrorMessage name = "lastname"/>
                <br/>

                <Field type="text" id="email" name="email" placeholder="Your email.."/>
                <ErrorMessage name = "email"/>
                <br/>

                </NameSurnEmail>
                <Field2 as = "textarea" id = "message" name="message" placeholder = "Your message.." />
                <ErrorMessage name = "message"/>
                <br/>

                </Inside>
                <Input2 type="submit" value="Submit">Contact</Input2>
                <BackgroundFooter/>    

            </Form>

            </Fade >
            </Formik>

                
                </IconContext.Provider>
                </Container>
                
            </MainContainer>
            
        </div>
        
    )
}

export default FormContainer
