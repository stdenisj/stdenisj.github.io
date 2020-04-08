import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GitHub from './FontAwesomeComponents/GitHub'
import LinkedIn from './FontAwesomeComponents/LinkedIn'
import Contact from './Contact.jsx'

export default function AboutMe() {
    const componentStyle = {
        height: '100vh',
        paddingTop: '10vh',
    }

    const colStyle = {
        padding: '25vh 2vw',
    }
    return (
        <Container style={ componentStyle } fluid>
           <Row>
               <Col style={ colStyle }>
                   <Row style={{ justifyContent: 'center' }}>
                        <Image src="http://placehold.it/300x250" rounded />
                    </Row>
                        <Contact />
               </Col>
               <Col style={ colStyle }>
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
