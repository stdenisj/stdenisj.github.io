import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import projectOne  from '../images/Jeopardy_project_image.png'
import projectThree from '../images/Project_three.png'
import projectFour from '../images/project_4.png'

export default function ProjectCardDeck() {

    return (
        <CardDeck>
          <Card>
            <a href='https://github.com/stdenisj/Project_3' target='_blank' rel="noopener noreferrer">
              <Card.Img variant="top" src={ projectThree} />
            </a>
            <Card.Body>
              <a href='https://github.com/stdenisj/Project_3' target='_blank' rel="noopener noreferrer">
                <Card.Title>Veganelp</Card.Title>
              </a>
                <Card.Text>
                  A review site for plant-based restaurants<br/>
                  Created with React.js and Node.js
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <a href='https://github.com/stdenisj/jeopardyProject' target='_blank' rel="noopener noreferrer">
                <Card.Img variant="top" src={ projectOne } />
              </a>
              <Card.Body>
                <a href='https://github.com/stdenisj/jeopardyProject' target='_blank' rel="noopener noreferrer">
                  <Card.Title>Automotive Jeopardy</Card.Title>
                </a>
                <Card.Text>
                Automotive themed version of the classic trivia game.<br/>
                Built using HTML, CSS, and Javascript.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <a href='https://github.com/stdenisj/banking-app' target='_blank' rel="noopener noreferrer">
              <Card.Img variant="top" src={ projectFour} />
              </a>
              <Card.Body>
              <a href='https://github.com/stdenisj/banking-app' target='_blank' rel="noopener noreferrer">
                  <Card.Title>Bank</Card.Title>
                </a>
                <Card.Text>
                  App that allows users to add bank accounts and transactions to their profiles.
                  built using Django and React.js, Authentication using Simple_JWT
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
    )
}
