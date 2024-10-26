import {React, useRef, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    
    const form = useRef(null);
    const submit_btn = useRef(null);
    useEffect(function() {
        form.current.addEventListener('submit', function(e) {
            const loadingtoast = toast.loading('Sending Details...');
            e.preventDefault();
            submit_btn.current.disabled = true;
            submit_btn.current.style.opacity = 0.5;

            const formData = new FormData(form.current);

            const formJSON = {};
            formData.forEach((value, key) => {
                formJSON[key] = value;
            });

            console.log(formJSON)
            
            fetch('/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formJSON)
                }).then((response) => {
                    submit_btn.current.disabled = false;
                    submit_btn.current.style.opacity = 1;
                    if (response.ok) {
                        
                        toast.update(loadingtoast, {render: 'Details Received. Will get back to you soon.', type: 'success', autoClose: 5000, isLoading: false, closeOnClick: true});
                    }
                    else {
                        toast.update(loadingtoast, {render: 'Something went wrong. Please try again later.', type: 'error', autoClose: 5000, isLoading: false, closeOnClick: true});
                    }
                }).catch(function(error) {

                    toast.update(loadingtoast, {render: 'Something went wrong. Please try again later.', type: 'error', autoClose: 5000, isLoading: false, closeOnClick: true});
                    submit_btn.current.disabled = false;
                    submit_btn.current.style.opacity = 1;
                });
        })
        
    }, [])


    return (
        <>  
            <ToastContainer position="bottom-right"/>
            <div className='card' style={{maxWidth: 800}} >
                <p style={{padding: "10px 5px", fontSize: 16}}>To get in touch with me, please fill out the form below. I will get back to you as soon as possible.</p>
                <form className='contact-form' action="http://localhost:5000/contact" method='GET' ref={form}>
                    <input type="text" name="name" id="name" required placeholder='Enter your name'></input>
                    <input type="email" name="email" id="email" required placeholder='Enter your Email'></input>
                    <input name="subject" id="subject" required placeholder='What is the reason for contacting us?'></input>
                    <textarea name="message" id="message" required placeholder='Write your message here...'></textarea>
                    <br></br>
                    <button className='interactive-button' style={{fontSize: 18, textAlign: "right"}} ref={submit_btn}>Get in Touch</button>
                </form>
            </div>
        </>

    );
}



export default ContactForm;