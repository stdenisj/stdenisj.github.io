import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutMe() {
    const componentStyle = {
        height: '100%',
        justifyContent: 'center'
    }
    return (
        <Container style={ componentStyle }fluid>
            <h1> About Me </h1>
        </Container>
    )
}
