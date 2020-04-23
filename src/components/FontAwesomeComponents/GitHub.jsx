import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GitHub() {
    return (
        <a href='https://github.com/stdenisj' target='_blank' rel="noopener noreferrer" style={{ padding: '2vw' }}>
            <FontAwesomeIcon icon={ faGithub }  size='3x'/>
        </a>
    )
}
