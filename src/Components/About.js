import React from 'react';
import { motion } from 'framer-motion';

// Antingen worklife eller about me sida

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about">
            <img className="about-image2" src="/resources/julius2.jpg" alt="project"></img>
            <h1>Julius Albiz</h1>
            <p>Bartender + Waiter turned UX Designer and Frontend Developer</p>
            <div className='about-container'>
                <div className='about-text'>
                    <h3>Who Am I?</h3>
                    <p>I am a socially outgoing person that loves interactions with new persons and learning new things. As of right now I am a MSc in the master programme Interactive
                        Media Technology at KTH.
                        It is hard to define me without talking about the restaurant industry, as I have worked in it since I graduated high school when I was 18.
                        Working the restaurant industry has also triggered a natural curiousity in human behavior, which I bring in to every project I work with.
                        <br></br><br></br>In the restaurant industry, I have learned to be service minded, socially outgoing and be able to handle stressful situations. All of these
                        being very important for me in my future career as an UX Designer and Frontend Developer </p>

                    <h3>Hobbies</h3>
                    <p>I love living an active life, which has led to me playing sports most of my life. Nowadays I mostly work out at the gym a lot and love to go bowling
                        and hanging out with friends.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default About;
