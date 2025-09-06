import React, { useContext,useRef,useEffect } from 'react';
import './loader.css';
import { ThemeContext } from '../contexts/ThemeContext';
import smoke from '../assets/smoke.mp4';
export default function Loader() {
    const { darktheme } = useContext(ThemeContext);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.playbackRate = 2.5;
        }
    }, []);

    return (
        <div className="loader">
            <video ref={videoRef} src={smoke} autoPlay muted loop playsInline />
            <h1 className='loader-text'>
                <span>S</span>
                <span>U</span>
                <span>R</span>
                <span>Y</span>
                <span>A</span>
                <span>N</span>
                <span>S</span>
                <span>H</span>
            </h1>
        </div>
    );
}
