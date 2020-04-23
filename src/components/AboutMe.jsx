import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Contact from './Contact.jsx'
import Headshot from '../images/Headshot.jpg'

export default function AboutMe() {
    const componentStyle = {
        height: '90vh',
        padding: '10vw 5vh',
    }
    return (
        <Container style={ componentStyle } id='About'>
           <Row>
               <Col lg={true}>
                   <Row style={{ justifyContent: 'center' }}>
                        <Image src={ Headshot } style={{ height:"30vw", borderRadius: '20px' }}/>
                    </Row>
                        <Contact />
               </Col>
               <Col style={{ justifyContent: 'center', paddingTop: '20vh' }} lg={ true }>
                    <h1> About Me </h1>
                    <p> 
                        I am a full-stack developer who is passionate about working hard and helping others. 
                        I use my problem solving, creative thinking skills, and desire to serve others to 
                        benefit my clients, coworkers and employer. 
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
