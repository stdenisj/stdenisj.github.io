import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import { Container } from 'react-bootstrap'

export default function Projects() {
    const projectStyle = {
        height: '100vh',
    }

    return (
        <Container style={ projectStyle } fluid>
            <h1> Projects </h1>

            <ProjectCarousel />
        </Container>
    )
}
