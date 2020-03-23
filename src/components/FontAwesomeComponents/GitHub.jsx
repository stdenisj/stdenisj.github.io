import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GitHub() {
    return (
        <a href='https://github.com/stdenisj' target='_blank' without rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faGithub }  size='6x'/>
        </a>
    )
}
