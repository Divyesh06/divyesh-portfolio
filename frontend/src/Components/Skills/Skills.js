import React from 'react';
import Observer from '../Observer';
import SkillSection from './SkillSection';
const skills = [
    {
        "category": "Languages",
        "items": [
            { "name": "Python", "skill": 90 },
            { "name": "Javascript", "skill": 75 },
            { "name": "HTML\nCSS", "skill": 80 },
            { "name": "SQL", "skill": 60 },
            { "name": "Java", "skill": 40 },
            { "name": "C", "skill": 40 }
        ]
    },
    {
        "category": "Technologies",
        "items": [
            { "name": "Anvil", "skill": 95 },
            { "name": "Unreal\nEngine", "skill": 75 },
            { "name": "React", "skill": 60 },
            { "name": "Arduino", "skill": 60 },
            { "name": "Node", "skill": 70 },
            { "name": "Unity", "skill": 40 },
            
        ]
    },
    {
        "category": "Technical Skills",
        "items": [
            { "name": "Coding", "skill": 90 },
            { "name": "Graphic Editing", "skill": 50 },
            { "name": "Video Editing", "skill": 40 },
            { "name": "IoT", "skill": 45 },
            { "name": "3D Design", "skill": 30 },
            
            { "name": "Content\nWriting", "skill": 50 }
        ]
    }
];





function Skills(props) {
    return (
        <>
            <Observer url="/skills"> 
            <div className='section-title'>Skills</div>
            {skills.map(function (section) {
                return (
                    <SkillSection section={section} />
                )
            })}
            </Observer>
        </>

    );
}



export default Skills;