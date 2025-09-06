import React,{useContext} from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import suryanshImage from '../assets/suryansh.jpg';
export default function Home() {
    return (
        <section className='home section' id="home">
            <div className="home-container container">
                <div className="home-content grid">
                    <Social/>
                    <Data/>
                    <img src={suryanshImage} className='home-img'/>
                </div>
            </div>
        </section>
    )
}
