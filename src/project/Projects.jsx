import React, { useContext } from 'react'
import Project from './Project'
import './projects.css';

export default function Projects() {
    return (
    <section 
        className="project section" 
        id='portfolio'>
        <h2 className="section-title"><span>P</span>rojects</h2>
        <h3 className="section-subtitle">Most recent</h3>
        <Project/>
    </section>
    )
}
