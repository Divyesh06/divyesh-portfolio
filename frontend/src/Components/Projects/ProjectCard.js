import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
    return (
        <a className='card project-card' href={props.url} target='_blank'>
            <div className='image-wrapper' style={{maxHeight: 220, overflow: "hidden"}}>
            <img src={props.image}></img>
            </div>
            <div style={{ padding: "10px 20px", borderTop: "solid rgba(255,255,255,0.1) 1px" }}>
            <div className='title'> {props.title}</div>
            <div> {props.desc}</div>
            </div>
            
            
        </a>
    );
    }



export default ProjectCard;