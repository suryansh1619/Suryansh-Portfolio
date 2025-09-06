import React, { createContext,useEffect} from 'react'
import useToggle from '../hooks/usetoggle';

export const ThemeContext= new createContext();
export function ThemeProvider(props) {
    const [darktheme,settheme]=useToggle(true);
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darktheme ? "dark" : "light")
    }, [darktheme])
    return (
        <ThemeContext.Provider value={{darktheme,changetheme:settheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
