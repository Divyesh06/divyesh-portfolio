import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Observer from './Observer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

var skills = ["Python", "Web Dev", "Game Dev", "Frontend Dev", "Backend Dev"]


function Intro() {
    var index = 0;
    return (
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' scrollableParentSelector={"#main"} offset={100} animateOnce duration={1}>
        <Observer url="/">
        <div className="intro" id="home">
            <div className="intro-subheading">
                Creative and Skilled Programmer
            </div>

            <Typewriter className="intro-heading"
                onInit={(typewriter) => {
                    for (let i = 0; i < skills.length; i++) {
                        typewriter.deleteAll()
                            .typeString(skills[i])
                            .pauseFor(1000)
                            .start();
                    }

                }}
                options={{
                    autoStart: true,
                    loop: true,
                  }}
            />

            <div style={{fontSize: 20, marginTop: 30, marginBottom: 5}}><i class="bi bi-arrow-down-circle" style={{marginRight: 8,}}></i>More About Me</div>

        </div>
        </Observer>
        </ScrollAnimation>

    );
}

export default Intro;