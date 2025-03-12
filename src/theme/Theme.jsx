import React, { useEffect, useState,useContext } from 'react'
import ThemeItem from './ThemeItem'
import './theme.css' 
import useToggle from '../hooks/usetoggle'
import {FaCog} from 'react-icons/fa';
import {BsSun,BsMoon} from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';
export default function Theme() {
    const { darktheme, changetheme } = useContext(ThemeContext);
    const {state}=useContext(DataContext);
    const themes=state.theme;
    const [color, setColor] = useState(null)
    const [openStyle,toggleStyle]=useToggle(false)
    const [openPanel,togglePanel]=useToggle(false)
    const changeTheme=async(newcolor)=>{
        const newValues=themes.find(theme=>theme.color===newcolor);
        const oldValues=themes.find(theme=>theme.color===color);
        if(!newValues || !oldValues) return;
        newValues.selected=true;
        oldValues.selected=false;
        setColor(newcolor);
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                if (openPanel) togglePanel(false);
            } 
            else {
                if (openStyle) toggleStyle(false);
            }
        };
        return () => {
      window.removeEventListener('resize', handleResize);
    };
        window.addEventListener('resize', handleResize);
    }, [openStyle, openPanel, toggleStyle, togglePanel]);
    useEffect(() => {
        if (themes && Array.isArray(themes)) {
            const selectedTheme = themes.find(theme => theme.selected);
            if (selectedTheme) {
            setColor(selectedTheme.color);
            }
        }
    }, [themes]);
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
    }, [color]);
    return (
        <section className={`
            ${openStyle ? 'show-theme' :''} 
            ${openPanel ? 'show-panel': ''} 
            ${!openPanel && !openStyle ? 'hide-theme': ''} theme section `}
            style={{
                backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)",
                boxShadow:  darktheme ? "0 0 4px hsl(0,0%,80%)" : "0 0 4px hsl(0,0%,30%)"}}>
            <div
                className={`${openPanel ? 'theme-hide-line' : 'theme-line'}`}
                onClick={togglePanel}
            />
            <div 
                className='theme-container'
                style={{backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)"}}>
                    <h3 
                    className="theme-switch-title"
                    style={{
                        color: darktheme ? "var(--container-color)" : "var(--title-color)"
                    }}
                    >Style</h3>
                    <hr/>
                <div className='theme-switch-items grid'> 
                    {themes.map((theme,index) => {
                        return <ThemeItem key={index} color={theme.color} changeTheme={changeTheme}/>
                    })}
                </div>
                <div 
                    onClick={toggleStyle}
                    className={`${openStyle? "hide-theme-button": '' } theme-switch-toggler`}
                    style={{backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)",
                            color:!darktheme ?  "var(--title-color)" : "var(--container-color)",
                            boxShadow:  darktheme ? "0 0 4px hsl(0,0%,80%)" : "0 0 4px hsl(0,0%,30%)"}}>
                    <FaCog/>
                </div>
                <div 
                    onClick={changetheme}
                    className={`${openStyle? "hide-theme-button": '' } theme-toggler`}
                    style={{backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)",
                        color:!darktheme ?  "var(--title-color)" : "var(--container-color)",
                        boxShadow:  darktheme ? "0 0 4px hsl(0,0%,80%)" : "0 0 4px hsl(0,0%,30%)"}}>
                    {darktheme ?<BsSun/>:<BsMoon/>}
                </div>
                <button 
                    onClick={changetheme}
                    className='theme-panel-btn button--flex'
                    style={{backgroundColor: darktheme ?  "var(--title-color)" : "var(--container-color)",
                        color:!darktheme ?  "var(--title-color)" : "var(--container-color)",
                        boxShadow:  darktheme ? "0 0 4px hsl(0,0%,80%)" : "0 0 4px hsl(0,0%,30%)"}}>
                {darktheme ?<BsSun/>:<BsMoon/>}
                </button>
                <div 
                    className="theme-switch-close"
                    onClick={() => {
                        if (openPanel) togglePanel(); 
                        if (openStyle) toggleStyle();
                    }}>&times;</div>
            </div>
        </section>
    )
}
