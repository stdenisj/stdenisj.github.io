import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedIn() {
    return (
    <a href='https://www.linkedin.com/in/jamesstdenis/' target='_blank' rel="noopener noreferrer" style={{ padding: '2vw' }}>
        <FontAwesomeIcon icon={ faLinkedin }  size='4x'/>
    </a>
    )
}
