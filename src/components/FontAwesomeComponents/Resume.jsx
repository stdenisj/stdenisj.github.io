import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import ResumeFile from '../../Stdenis.James_resume1.pdf'

export default function Resume() {
    return (
        <a href={ ResumeFile } target='_blank' rel="noopener noreferrer" style={{ padding: '2vw' }}>
            <FontAwesomeIcon icon={ faFileAlt }  size='3x'/>
            <p>Resume</p>
        </a>
    )
}
