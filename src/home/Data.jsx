import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import Send from '../SVG/Send'
import Hand from '../SVG/Hand'

export default function Data() {
    const {state}=useContext(DataContext)
    const homeData =state.homeData[0]
    let [firstCharFirstName, ...restOfStringFirstName] = homeData.firstName.split('');
    let [firstCharLastName, ...restOfStringLastName] = homeData.lastName.split('');
    return (
        <div className="home-data">
            <h1 
                className="home-title">
                <span><span>{firstCharFirstName}</span>{restOfStringFirstName} </span> 
                <span><span>{firstCharLastName}</span>{restOfStringLastName} </span>
                <Hand color={"var(--primary-color)"}/>
            </h1>
            <p 
                className="home-description">
            {homeData.description}
            </p>
            <button 
                className="button">
                {homeData.buttonText}
                <Send className="button-icon" color={"var(--primary-text-color)"}/>
            </button>
        </div>
    )
}
