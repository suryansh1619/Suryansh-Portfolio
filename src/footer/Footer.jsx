import React, { useContext,useState} from 'react'
import './footer.css';
import {DataContext} from '../contexts/DataContext'

export default function Footer() {
    const {state}=useContext(DataContext);
    const footers=state.footer
    const [hoveredId, setHoveredId] = useState(null);
    
    const handleMouseEnter = (id) => setHoveredId(id);
    const handleMouseLeave = () => setHoveredId(null);
    return (
        <footer 
            className='footer'>
            <div className="footer-container container">
                <h1 className="footer-title">Suryansh</h1>
                <div className="footer-social grid">
                    {footers.map((footer,index)=>{
                        return(
                            <a 
                                key={index}
                                href={footer.link}
                                className='footer-social-icon'
                                onMouseEnter={() => handleMouseEnter(index)} 
                                onMouseLeave={handleMouseLeave}
                                target="_blank"
                                rel="noopener noreferrer">
                                {footer.icon(index===hoveredId ? "var(--primary-color)": "var(--primary-text-color)")}
                            </a>
                        )
                    })}
                </div>
                <span className="footer-copy">&#169; Copyright. All rights reserved</span>
            </div>
        </footer>
    )
}
