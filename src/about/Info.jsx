import React, { useContext } from 'react'
import {DataContext} from '../contexts/DataContext'
export default function Info() {
    const {state}=useContext(DataContext)
    const aboutInfo=state.aboutInfo[0];
    return (
        <div className="about-info grid">
            <div 
                className="about-box">
                <i className='bx bx-award about-icon'></i>
                <h3 className="about-title">{aboutInfo.title1}</h3>
                <span className="about-subtitle">{aboutInfo.subtitle1}</span>
            </div>
            <div 
                className="about-box">
                <i className='bx bx-briefcase about-icon'></i>
                <h3 className="about-title">{aboutInfo.title2}</h3>
                <span className="about-subtitle">{aboutInfo.subtitle2}</span>
            </div>
        </div>
    )
}