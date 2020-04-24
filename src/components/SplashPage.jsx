import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import splashpageimage  from '../images/splashpageimage.jpeg'

export default function SplashPage() {
    const componentStyle = {
        backgroundImage: `url(${ splashpageimage })`,
        overflowY: 'auto',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
    }

    const divStyle ={
        marginTop: '10vh',
        padding: '5px',
        justifyContent: 'center',
        backgroundColor: 'rgb(200, 200, 200, 0.2',
        borderRadius: '5px',
    }

    return (
        <Container style={ componentStyle } fluid id='Splash'>
            <Row>
                <Col>
                </Col>
                <Col style={ divStyle }>
                        <h2> Jame St-Denis</h2><br/>
                        <h3> Software Engineer, Honest, and Hardworking </h3>
                </Col>
            </Row>
        </Container>
    )
}
