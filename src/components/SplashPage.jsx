import React from 'react'
import { Container } from 'react-bootstrap'
import splashpageimage  from '../images/splashpageimage.jpeg'

export default function SplashPage() {
    const componentStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
        overflowY: 'auto',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
    }

    return (
        <Container style={ componentStyle } fluid>
        </Container>
    )
}
