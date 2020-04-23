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
               <Col style={{ justifyContent: 'center' }} lg={ true }>
                    <h1> About Me </h1>

                    <p> 
                        “A vigilante is just a man lost in scramble for his own gratification. 
                        He can be destroyed or locked up. But if you make yourself more than just a man, 
                        if you devote yourself to an ideal and if they can’t stop you then you become something else entirely. 
                        Legend, Mr Wayne.”
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
