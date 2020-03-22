import React from 'react'
import { Carousel } from 'react-bootstrap'
import projectOne  from '../images/Jeopardy_project_image.png'
import projectThree from '../images/Project_three.png'

export default function ProjectCarousel() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ projectThree }
                alt="First slide"
                height='500px'
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://www.fillmurray.com/210/295"
                alt="Third slide"
                height='500px'
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href='https://github.com/stdenisj/jeopardyProject' target='_blank' without rel="noopener noreferrer">
                    <img
                    className="d-block w-100"
                    src={ projectOne }
                    alt='Jeopardy'
                    height='500px'
                    />
                    </a>
                <Carousel.Caption>
                    <h3>
                        <a href='https://github.com/stdenisj/jeopardyProject' target='_blank' without rel="noopener noreferrer">
                            Automotive Jeopardy
                        </a>
                    
                    </h3>
                    <p>Automotive themed version of the classic trivia game</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
