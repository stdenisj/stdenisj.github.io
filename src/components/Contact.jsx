import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import GitHub from './FontAwesomeComponents/GitHub'
import LinkedIn from './FontAwesomeComponents/LinkedIn'

export default function Contact() {
    const contactStyle = {
        height: '100vh',
        padding: '50vh 0vh'
    }
    return (
        <Container style={ contactStyle } id='Contact' fluid>
            <Row>
                <Col>
                    <LinkedIn />
                </Col>
                <Col>
                    <GitHub />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
