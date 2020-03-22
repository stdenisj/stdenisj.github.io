import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutMe() {
    const componentStyle = {
        height: '100vh',
        justifyContent: 'center',
        padding: '40vh'
    }
    return (
        <Container style={ componentStyle }fluid>
            <h1> About Me </h1>

            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga, sapiente similique! Repellat cum ad ipsa! Harum, similique ab. 
                Illo animi cumque beatae neque cum quas est molestias incidunt quisquam sit.
            </p>
        </Container>
    )
}
