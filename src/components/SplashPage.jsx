import React from 'react'
import { Container } from 'react-bootstrap'
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

    return (
        <Container style={ componentStyle } fluid id='Splash'>
        </Container>
    )
}
