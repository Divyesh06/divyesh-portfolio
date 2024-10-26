import React from 'react';
import Observer from '../Observer';
import ContactForm from './ContactForm';

function Contact(props) {
    return (
        <>
            <Observer url="/contact"> </Observer>
            <div className='section-title'>Contact</div>

            <ContactForm />
            
        </>

    );
}



export default Contact;