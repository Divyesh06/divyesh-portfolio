import {useState,React, useRef} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    
    return (
        <div className='header'>
            <div className='navbar-links'>  
                <NavLink to="/"><i class="bi bi-house-door"></i>Home</NavLink>
                <NavLink to="/projects"><i class="bi bi-layers"></i>Projects</NavLink>
                <NavLink to="/about"><i class="bi bi-info-circle"></i>About</NavLink>
                <NavLink to="/skills"><i class="bi bi-graph-up"></i>Skills</NavLink>
            </div>
        </div>
    );
    }



export default Header;