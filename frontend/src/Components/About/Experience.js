import React from 'react';

function Experience(props) {
    return (
        <>
        
        <a className='experience-panel' href={props.url} target='_blank'>
            
            <img src={props.image}></img>
            <div>
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
                <p style={{opacity: 0.65}}>{props.duration}</p>
                {props.desc? <p style={{marginTop: 20}}>{props.desc}</p> : <></>}
            </div>
            
        </a>  
        </>
    );

}

export default Experience