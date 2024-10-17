import {React,useState, createRef} from 'react';
import Intro from './Intro';
import Projects from './Projects/Projects';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom'; 
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

var elements = [<Projects/>,<About/>,<Skills/>,<Contact/>];

function Content() {
    var index = useState(0);

    return (
        <div class="content">
            {elements.map(function (element, index) {
                return (
                    <ScrollAnimation animateIn="fadeInUp" animateOut='fadeOut' key={index} scrollableParentSelector={"#main"} offset={100} duration={0.7} animateOnce> 
                        {element}
                    </ScrollAnimation>
                )
            })}
            
        </div>

    );
    }

export default Content;