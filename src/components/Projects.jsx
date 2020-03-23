import React from 'react'
import ProjectCardDeck from './ProjectCardDeck'
import { Container } from 'react-bootstrap'

export default function Projects() {
    const projectStyle = {
        height: '100vh',
        paddingTop: '10vh'
    }

    return (
        <Container style={ projectStyle } id='Projects' fluid>
            <h1> Projects </h1>

            <ProjectCardDeck />
        </Container>
    )
}
