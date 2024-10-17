import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileCard() {
    return (
        <div className='card profile-card'>
            <section>
            <center>
            <img src="assets/profile.png" className='profile-pic'></img>
            <br></br><br></br>
            <p className='profile-name'>Divyesh Lakhotia</p>
            <p className='sub-text'>divyeshlakhotia@gmail.com</p>
            </center>
            
            </section>
            <section>
            <div className='socials'>
                <a href="https://linkedin.com/in/divyesh-lakhotia/" target='_blank'><i class="bi bi-linkedin" ></i></a>
                <a href="https://wa.link/b0lu25" target='_blank'><i class="bi bi-whatsapp"></i></a>
                <a href="https://github.com/Divyesh06" target='_blank'><i class="bi bi-github"></i></a>
                <a href="mailto:divyeshlakhotia@gmail.com"><i class="bi bi-envelope"></i></a>
            </div>
            <br></br>
            <NavLink to="/contact">
            <button className='interactive-button' style={{width: "100%"}}><i class="bi bi-chat" style={{marginRight: 10}}></i>Get in Touch</button>
            </NavLink>
            </section>
            <a href="assets/My CV.pdf" download={"resume.pdf"} className='interactive-link' style={{textAlign: "center"}}><i class="bi bi-download"></i>Download CV</a>
            
   
            
            
        </div>
    );
    }

export default ProfileCard;