import {useRef,React, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation} from 'react-router-dom';

let triggered_from_scroll = true;

function Observer(props) {
    const ref = useRef(null);
    const index = props.index;
    const location = useLocation();
    const navigate = useNavigate();
    
    var observer = new IntersectionObserver(onIntersection, {
        root: null,  
        threshold: 1,
      })

    function onIntersection(entries) {
        console.log(props.url)
        if (entries[0].isIntersecting) {
             triggered_from_scroll = true;
             navigate(props.url);
             setTimeout(function() {
                 triggered_from_scroll = false;
             },100);
        };
     }
    
    function scroll() {
        if (location.pathname === props.url) {
            let margin = 100;
            document.getElementById("main").scrollTo({top: ref.current.getBoundingClientRect().top + document.getElementById("main").scrollTop - margin});
        }
    }

    useEffect(function() {
        if (!triggered_from_scroll) {
            scroll();
        }
        
    }, [location])

    useEffect(function() {
        observer.observe(ref.current);
        setTimeout(scroll, 50, true)
        

        return function() {
            observer.unobserve(ref.current);
        }


    }, [])

    return (
        <>
            <div ref={ref} style={{height: "90vh",  width: "10px", position: "absolute"}}></div>
            {props.children}
            
        </>
        
    );


    
    }



export default Observer;