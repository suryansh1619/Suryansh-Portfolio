import React, { useContext } from 'react'
import './about.css'
import aboutImg from '../assets/suryansh.jpg'
import Info from './Info'
import { DataContext } from '../contexts/DataContext'
import File from '../SVG/File'

export default function About() {
    const { state } = useContext(DataContext)
    const about = state.about[0]

    return (
        <section 
            className="about section" 
            id="about">
            <h2 className="section-title">
                <span>A</span>bout 
            </h2>
            <h3 className="section-subtitle">
                Introduction
            </h3>

            <div className="about-container container grid">
                <div className="about-img-wrapper">
                    <img src={aboutImg} alt="about" className="about-img" />
                </div>

                <div className="about-data">
                    <Info />
                    <p className="about-description">
                        {about.description}
                    </p>
                    <a
                        href="Suryansh_Sahu_SDE.pdf"
                        download="Suryansh_Sahu.pdf"
                        className="button">
                        {about.buttonText}
                        <File color={"var(--primary-text-color)"}/>
                    </a>
                </div>
            </div>
        </section>
    )
}
