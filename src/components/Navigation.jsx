import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import ResumeFile from '../Stdenis.James_resume1.pdf'

export default class Navigation extends Component {
    render() { 
        return (
            <Navbar collapseOnSelect expand="lg" fixed="top" bg='light' >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#Splash">Home</Nav.Link>
                        <Nav.Link href="#About">About Me</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link 
                            href="https://github.com/stdenisj" 
                            target='_blank'
                            rel="noopener noreferrer"
                        >Github</Nav.Link>
                        <Nav.Link 
                            href="https://www.linkedin.com/in/jamesstdenis/" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >LinkedIn</Nav.Link>
                        <Nav.Link 
                            href={ ResumeFile } 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
