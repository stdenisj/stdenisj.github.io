import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutMe() {
    const componentStyle = {
        height: '100vh',
        paddingTop: '10vh'
    }
    return (
        <Container style={ componentStyle }fluid>
            <h1> About Me </h1>

            <p> 
            “A vigilante is just a man lost in scramble for his own gratification. 
            He can be destroyed or locked up. But if you make yourself more than just a man, 
            if you devote yourself to an ideal and if they can’t stop you then you become something else entirely. 
            Legend, Mr Wayne.”
            </p>
        </Container>
    )
}
