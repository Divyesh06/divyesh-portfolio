import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Card from "./ProjectCard"
import Observer from '../Observer';
var projects_data = [
    {
        "title": "Geeke",
        "desc": "A Social Platform that connects Book Lovers. Provides free books, a platform for writers and gamifies books. Built using Anvil, a Python-based web full stack framework.",
        "image": "assets/Geeke Showcase New.png",
        "url": "https://geeke.app"
    },
    {
        "title": "Browspire",
        "desc": "A Browser Extension that gives your New Tab page a modern look and adds widgets for Spotify, TODO lists, Weather, Quotes, and more. Utilises JavaScript, CSS, and HTML as well as various external APIs.",
        "image": "assets/Chrome Mockup.png",
        "url": "https://browspire.anvil.app"
    },
    {
        "title": "Zia",
        "desc": "A Chatbot for Discord that gives hilarious responses and fun commands. Used by 3.5K+ Servers and 360K+ users. Generated Rs. 15K+ in revenue. Built using discord.py and Python.",
        "image": "assets/Zia Logo Reimagined.png",
        "url": "https://zia-bot.anvil.app"
    },
    {
        "title": "Blind Coding IDE",
        "desc": "Built a Web IDE for a Tech Fest event where you write code without seeing it. Added visual hints and a lifeline system to assist users. The IDE also included cheat detection measures.",
        "image": "assets/BlindCode.jpg",
        "url": "https://blindcoding.onrender.com/"
    },
    {
        "title": "Gesture & Voice Car",
        "desc": "A Car built using NodeMCU and Arduino that could respond to hand gestures and voice commands. Also developed a web app using Anvil for sending commands",
        "image": "assets/Car.png",
        "url": "https://www.linkedin.com/posts/divyesh-lakhotia_hands-on-learning-learning-just-from-books-activity-7170111030323343360-EJpJ?utm_source=share&utm_medium=member_desktop"
    }
]




function Projects() {

    const carousel = useRef(null);
    var project_cards=[]
    for (let i = 0; i < projects_data.length; i++) {
    
        project_cards.push(<Card title={projects_data[i]['title']} desc={projects_data[i]['desc']} image={projects_data[i]['image']} url={projects_data[i]['url']}/>);
    }

    function scroll(dir) {
        var scroll_width = carousel.current.children[0].offsetWidth;
        if (dir === "left") {
            carousel.current.scrollBy(-scroll_width, 0);
        }
        else {
            carousel.current.scrollBy(scroll_width, 0);
        }
    }

    return (
        <>
        <Observer url="/projects"></Observer>
        <div className='section-title'>Projects</div>
        <div className='carousel-container'>
            <i class="bi bi-arrow-left" onClick={() => scroll("left")}></i>
            <div ref={carousel} className='carousel'>{project_cards}</div>
            <i class="bi bi-arrow-right" onClick={() => scroll("right")}></i>
        </div>
        
        </>
    );

    }



export default Projects;