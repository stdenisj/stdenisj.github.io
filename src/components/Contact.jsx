import React from 'react'
import { Row } from 'react-bootstrap'
import GitHub from './FontAwesomeComponents/GitHub'
import LinkedIn from './FontAwesomeComponents/LinkedIn'
import Resume from './FontAwesomeComponents/Resume'

export default function Contact() {

    return (
            <Row style={{ justifyContent: 'center' }}>
                <LinkedIn />
                <GitHub />
                <Resume />
            </Row>
    )
}
