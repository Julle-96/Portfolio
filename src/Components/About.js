import React from 'react';
import { motion } from 'framer-motion';

// Antingen worklife eller about me sida

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Work">

            <h1>Work Life</h1>
        </motion.div>
    )
}

export default About;
