import React from 'react';
import * as IoIcons from 'react-icons/io5';



function Contact() {

    return (
        <div className="Contact">
            <h1>I would love to get in touch with you!</h1>
            <p>Feel free to contact me at juliusalbiz@gmail.com <br></br>

                <br></br>Or if you are in Stockholm and looking for a fun night out,
                <br></br>come visit my work for a beer or two at Lokal Izakaya/Lemon bar at Scheelegatan 8.
                <br></br><IoIcons.IoBeerOutline size={50} color={'#c7c6c6'} /></p>

            <img className="about-image1" src="/resources/julius1.jpg" alt="project"></img>
        </div>

    )
}
export default Contact;
