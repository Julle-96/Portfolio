import React from 'react';
import { motion } from 'framer-motion';


function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Home">
            <div className="home-text">
                <h3>

                    <br></br>Hi there! I'm Julius, a service minded UX Designer and Frontend Developer
                    <br></br>Nice to meet you!

                </h3>
                <p>Welcome to my portfolio I have coded using React JS!</p>
                <a className="resume" href='resume/resume.pdf' download>Download Resume</a>
            </div>

            <img className="home-image" src="/resources/home.jpg" alt="project"></img>

        </motion.div>
    )
}
export default Home;
