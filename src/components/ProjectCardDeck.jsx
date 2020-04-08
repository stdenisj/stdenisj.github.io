import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import projectOne  from '../images/Jeopardy_project_image.png'
import projectThree from '../images/Project_three.png'

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
            {/* <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card> */}
          </CardDeck>
    )
}
