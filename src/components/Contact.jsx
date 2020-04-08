import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import GitHub from './FontAwesomeComponents/GitHub'
import LinkedIn from './FontAwesomeComponents/LinkedIn'

export default function Contact() {

    return (
            <Row style={{ justifyContent: 'center' }}>
                <LinkedIn />
                <GitHub />
            </Row>
    )
}
