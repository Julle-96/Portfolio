import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Home">
            <h3>

                <br></br>Years of working service in the restaurant business
                <br></br>+ a Master of Science degree to become a service minded UX designer
            </h3>
            <a className="resume" href='resume/resume.pdf' download>Download Resume</a>
        </motion.div>
    )
}
export default Home;
