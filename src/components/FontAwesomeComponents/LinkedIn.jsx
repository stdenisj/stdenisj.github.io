import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedIn() {
    return (
    <a href='https://www.linkedin.com/in/jamesstdenis/' target='_blank' without rel="noopener noreferrer">
        <FontAwesomeIcon icon={ faLinkedin } size='6x' />
    </a>
    )
}
