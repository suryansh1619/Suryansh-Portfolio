import React, { useContext, useState, useEffect } from 'react'
import "./header.css"
import useToggle from '../hooks/usetoggle'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { DataContext } from '../contexts/DataContext'
import Sun from '../SVG/Sun';
import Moon from '../SVG/Moon';

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
                            { to: "/", label: "Home", icon: "uil uil-estate" },
                            { to: "/about", label: "About", icon: "uil uil-user" },
                            { to: "/projects", label: "Projects", icon: "uil uil-scenery" }
                        ].map(({ to, label, icon }) => (
                            <li key={to} className="nav-item">
                                <Link 
                                    to={to}
                                    className={`${location.pathname === to ? "active-link" : ""} nav-link`}>
                                    <i className={`${icon} nav-icon`}></i>
                                    {!isMobile && <span className="nav-text">{label}</span>}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <div 
                                className='nav-theme'
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
