import React from 'react';
import Observer from '../Observer';
import ContactForm from './ContactForm';

function Contact(props) {
    return (
        <>
            <Observer url="/contact"> 
            <div className='section-title'>Contact</div>

            <ContactForm />
            </Observer>
        </>

    );
}



export default Contact;