import React, { useContext } from 'react'
import useToggle from '../hooks/usetoggle';
import ProjectModal from './ProjectModal'

export default function ProjectItem(props) {
    const  {project}=props;
    const [isOpen, setIsOpen] = useToggle(false);

    const toggleModal = () => {
        const body = document.querySelector("body");
        if (isOpen) {
            body.classList.remove("modal-open");
            setIsOpen(false);
        } else {
            body.classList.add("modal-open");
            setIsOpen(true);
        }
    };

    return (
        <div 
            className="project-card" 
            key={project.id}>
            <img src={project.images[0]} alt="" className="project-img" />
            <div className="project-hover">
                <h3 className="project-title">{project.title}
                </h3>
                <button className="project-button button" 
                    onClick={toggleModal}>Know More
                </button>
            </div>
            
            {isOpen && 
                <div 
                    className="project-modal"
                    onClick={toggleModal} >
                    <div className="project-modal-wrapper" onClick={(e) => e.stopPropagation()}>
                        <ProjectModal   project={project}/>
                    </div>
                </div>
            }
        </div>
    )
}