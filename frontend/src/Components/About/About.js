import React from 'react';
import Experience from './Experience';
import Observer from '../Observer';

const desc = `Passionate programmer currently pursuing BCA from JK Lakshmipat University. 

Proficient in Python, Web Development, Java, Unreal Engine, and Database Management. Strong problem-solving abilities coupled with a passion for coding and familiarity with AI tools and technology. Aims to apply creative solutions while solving problems.

Worked on several projects that required a mixed set of skills. Handles a social platform in spare time that connects users and allows reading and writing books (available at https://geeke.app)`

const work_exp = [
    {
        "title": "Geeke",
        "subtitle": "Founder (Part-time)",
        "duration": "May 2021 - Present",
        "desc": "Since 12th Grade, I have been handling my own hobby-based website alongside studies. Besides handling the entire Frontend, Backend, Database, and other complexities of a social media app, I have also been doing all other roles required for handling a business including making content, designing graphics and videos, promotions, decision-making & more.",
        "image": "assets/Geeke 192x192.png",
        "url": "https://geeke.app"
    },
    {
        "title": "Viper Metrics",
        "subtitle": "Full Stack Developer (Part-time)",
        "duration": "May 2024 - Present",
        "desc": "Part-time Anvil Full Stack Developer at an Australian company specializing in asset management and inspections for the mining and civil sectors. Implemented complex functionalities for their web application and led the complete rebuild of one of their key apps.",
        "image": "assets/viper metrics.jpeg",
        "url": "https://www.linkedin.com/company/viper-metrics/"
    }
]


const education = [
    {
        "title": "JK Lakshmipat University",
        "subtitle": "Bachelor of Computer Applications",
        "duration": "2022 - 2025",
        "image": "assets/JKLU.png",
        "url": "https://www.linkedin.com/school/jklujaipur/"
    }

]

function render_each_exp(experiences) {
    var elements = [];
    for (var i = 0; i < experiences.length; i++) {
        elements.push(
            <>
                <Experience image={experiences[i].image} title={experiences[i].title} subtitle={experiences[i].subtitle} duration={experiences[i].duration} desc={experiences[i].desc} url={experiences[i].url} />
                {(i < experiences.length - 1 && experiences.length > 1) ? <div style={{ height: 40}}></div> : <div style={{ height: 10}}></div>}
            </>
        )

    }

    return elements
}



function About(props) {
    return (
        <>
            <Observer url="/about"> </Observer>
            <div className='section-title'>About</div>
            <p className='normal-text'>{desc}</p>
            <br></br><br></br>
            <div className='card'> <p className='sub-title'>Experience</p>
                <br></br>
                {render_each_exp(work_exp)}

            </div>
            <br></br>

            <div className='card'> <p className='sub-title'>Education</p>
                <br></br>
                {render_each_exp(education)}

            </div>
        </>

    );
}



export default About;