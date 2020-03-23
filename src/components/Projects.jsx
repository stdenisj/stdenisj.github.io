import React from 'react'
import ProjectCardDeck from './ProjectCardDeck'
import { Container } from 'react-bootstrap'

export default function Projects() {
    const projectStyle = {
        height: '100vh',
    }

    return (
        <Container style={ projectStyle } fluid>
            <h1> Projects </h1>

            <ProjectCardDeck />
        </Container>
    )
}
