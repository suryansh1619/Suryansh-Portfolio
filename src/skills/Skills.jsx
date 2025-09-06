import React, { useContext, useState } from 'react';
import './skills.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';
export default function Skills() {
    const { state } = useContext(DataContext);
    const { darktheme } = useContext(ThemeContext);
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => setHoveredId(id);
    const handleMouseLeave = () => setHoveredId(null);

    return (
        <section className='section'>
            <h2 className="section-title">
                <span>S</span>kills
            </h2>
            <h3 className="section-subtitle">"Tech-Stack"</h3>
            <div className="skills-container container">
                <div 
                    className="skills-content">
                    {state.skills.map((category, catIndex) => (
                        <div key={catIndex} className="skills-category">
                            <h3 className="skills-category-title">{category.category}</h3>
                            <div className="skills-group grid">
                                {category.subSkills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="skills-data"
                                        onMouseEnter={() => handleMouseEnter(idx+(catIndex+1)*10)} 
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="skills-data-icon">
                                            {skill.icon("var(--primary-text-color)")}
                                        </div>
                                        <h3
                                            className="skills-name"
                                            style={{ color: hoveredId === idx+(catIndex+1)*10 ? 'var(--primary-text-color)' : '' }}
                                        >
                                            {skill.title}
                                        </h3>
                                    </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
