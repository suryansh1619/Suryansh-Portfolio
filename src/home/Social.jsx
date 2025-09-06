import React, { useContext,useState} from 'react'
import { DataContext } from '../contexts/DataContext'
export default function Social() {
    const {state}=useContext(DataContext)
    const homeSocial =state.homeSocial
    const [hoveredId, setHoveredId] = useState(null);
        
    const handleMouseEnter = (id) => setHoveredId(id);
    const handleMouseLeave = () => setHoveredId(null);
    return (
        <div className='home-social'>
            {homeSocial.map((social,index)=>{
                return(
                    <a 
                        key={index}
                        href={social.link}     
                        className='home-social-icon'
                        onMouseEnter={() => handleMouseEnter(index)} 
                        onMouseLeave={handleMouseLeave}
                        target="_blank"
                        rel="noopener noreferrer">
                        {social.icon(index===hoveredId ? "var(--primary-color)": "var(--primary-text-color)")}
                    </a>
                )
            })}
        </div>
    )
}
