import React, { useContext } from 'react'
import './qualification.css'
import useToggle from '../hooks/usetoggle';
import { DataContext } from '../contexts/DataContext';

export default function Qualification() {
    const { state } = useContext(DataContext)
    const qualificationEducation = state.qualificationEducation;
    const qualificationAchievement = state.qualificationAchievement;
    const [toggle, showMenu] = useToggle(true);
    return (
        <section
            className="qualification section">
            <h2
                className="section-title"><span>Q</span>ualification</h2>
            <h3
                className="section-subtitle">Personal journey</h3>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={`qualification-button ${toggle ? "qualification-active" : ""}`}
                        onClick={showMenu}>
                        <i className="uil uil-graduation-cap
                        qualification-icon"></i>
                        Education
                    </div>
                    <div className={`qualification-button ${!toggle ? "qualification-active" : ""}`}
                        onClick={showMenu}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i>
                        Achievements
                    </div>
                </div>
                <div className="qualification-sections">
                    <div className={`${toggle ? "qualification-content-active" : ""} qualification-content`}>
                        {qualificationEducation.map((education, index) => {
                            return (
                                <div key={index} className="qualification-data">
                                    <div className="qualification-row">
                                        <h3 className="qualification-title">{education.title}</h3>
                                        <h4 className="qualification-grade">{education.grade}</h4>
                                    </div>
                                    <div className="qualification-row">
                                        <h4 className="qualification-subtitle">{education.subtitle}</h4>
                                        <div className="qualification-calender">
                                            <i className="uil uil-calendar-alt"></i> {education.calender}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${!toggle ? "qualification-content-active" : ""} qualification-content`}>
                        {qualificationAchievement.map((achievement, index) => {
                            return (
                                <div key={index} className="qualification-data">
                                    <div className="qualification-row">
                                        <h3 className="qualification-title">{achievement.title}</h3>
                                        <h4 className="qualification-grade">{achievement.level}</h4>
                                    </div>
                                    <div className="qualification-row">
                                        <h4 className="qualification-subtitle">{achievement.subtitle}</h4>
                                        <div className="qualification-calender">
                                            <i className="uil uil-calendar-alt"></i> {achievement.calender}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
