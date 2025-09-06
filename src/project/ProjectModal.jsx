import React, { useState, useEffect, useRef,useContext } from 'react';
import './projectModal.css';

export default function BlogSlider ({project}){
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayRef = useRef(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % project.images.length);
      }, 3000);
    } else {
      clearInterval(autoplayRef.current);
    }

    return () => clearInterval(autoplayRef.current);
  }, [isAutoPlaying, project.images.length]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (sliderRef.current && sliderRef.current.contains(e.target)) {
        e.preventDefault();
        
        setIsAutoPlaying(false);
        
        if (e.deltaY > 0) {
          setCurrentSlide(prev => (prev + 1) % project.images.length);
        } else {
          setCurrentSlide(prev => (prev - 1 + project.images.length) % project.images.length);
        }
        setTimeout(() => {
          setIsAutoPlaying(true);
        }, 2000);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [project.images.length]);

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 2000);
  };

  return (
    <div className="project-modal-container">
      <div ref={sliderRef} className="project-modal-main">
        <div className="project-modal-img-container">
          <div className="project-modal-img-overlay" />
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={project.title}
              className={`project-modal-img ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="project-modal-content">
          <span className="project-modal-category">
            <b>{project.category}</b> 
          </span>
          <div className="project-modal-title">
            {project.title}
          </div>
          <div className="project-modal-tech">
            {[project.subtitle1, project.subtitle2, project.subtitle3, project.subtitle4, project.subtitle5, project.subtitle6]
              .filter(Boolean)
              .map((tech, idx) => (
                <span key={idx} className="tech-chip">{tech}</span>
              ))}
          </div>
          <div className="project-modal-text">
            {project.description}
          </div>
          <a
              href={project.link}
              className="button"
              target="_blank"
              rel="noopener noreferrer">
              Code
            </a>
        </div>
        <div className="project-modal-pagination">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`project-modal-pagination-bullet ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
