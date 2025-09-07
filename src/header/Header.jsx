import React, { useContext, useState, useEffect } from 'react'
import "./header.css"
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { DataContext } from '../contexts/DataContext'
import Sun from '../SVG/Sun';
import Moon from '../SVG/Moon';
import Home from '../SVG/Home';
import About from '../SVG/About';
import Project from '../SVG/Project';

export default function Header() {
    const { state } = useContext(DataContext)
    const { darktheme, changetheme } = useContext(ThemeContext);
    const name = state.homeData[0].firstName
    const location = useLocation()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [hovered, setHovered] = useState(false);
        
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <header className="header" >
            <nav className="nav container">
                <Link to="/" className="nav-logo">{name}</Link>
                <div className="nav-menu show-menu" >
                    <ul className="nav-list grid">
                        {[
                            { to: "/", label: "Home", icon: (color)=><Home color={color}/> },
                            { to: "/about", label: "About", icon: (color)=><About color={color}/> },
                            { to: "/projects", label: "Projects", icon: (color)=><Project color={color}/> }
                        ].map(({ to, label, icon }) => (
                            <li key={to} className="nav-item">
                                <Link 
                                    to={to}
                                    className={`${location.pathname === to ? "active-link" : ""} nav-link`}>
                                    <div className='nav-icon'>
                                        {icon(`${location.pathname === to ? "var(--primary-color)" : "var(--primary-text-color)"}`)}
                                    </div>
                                    {!isMobile && <span className={`${location.pathname === to ? "nav-text-active" : ""} nav-text`}>{label}</span>}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <div 
                                className='nav-icon nav-theme'
                                onClick={changetheme}
                                onMouseEnter={()=>setHovered(true)} 
                                onMouseLeave={()=>setHovered(false)}>
                                    {darktheme ? <Sun color={hovered ? "var(--primary-color)" : "var(--primary-text-color)"}/> : <Moon color={hovered ? "var(--primary-color)" :"var(--primary-text-color)"}/>}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
