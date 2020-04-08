import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
    render() { 
        return (
            <Navbar fixed="top" bg='light'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Splash">Home</Nav.Link>
                        <Nav.Link href="#About">About Me</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
