import {useRef,React, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation} from 'react-router-dom';

let block_scroll_on_location_change = false;

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
            block_scroll_on_location_change = true
            navigate(props.url);
             setTimeout(function() {
                 block_scroll_on_location_change = false;
             },100);
        };
     }
    
    function scroll() {
        
        if (!block_scroll_on_location_change) {
            if (location.pathname === props.url) {
                let margin = 100;
                window.scrollTo({top: ref.current.getBoundingClientRect().top + window.scrollY - margin, behavior: 'smooth'});
            }
        }
        
    }

    useEffect(function() {
        scroll();
        
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
            <div ref={ref} style={{height: "50vh", maxHeight: "100%", width: "10px", position: "absolute"}}></div>
            {props.children}
            
        </>
        
    );


    
    }



export default Observer;