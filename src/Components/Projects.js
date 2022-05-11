import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Här kan man ha en bild på varje projekt och titel, där man därefter kan klicka sig dit och så får man mer information 
// Skapa en fil där jag har alla projekt, deras namn, path, text om projektet och bild. Ha istället en loop som skapar lådor för varje projekt. 

function Projects() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projects">
            <div className="project-box">
                <h1>Baronnect</h1>
                <img className="box-image" src="/resources/sketch.jpg" alt="project"></img>
                <h2>Ideation, Sketching, Testing</h2>
                <p className="box-text"> Website business idea to help restaurant staff place orders by gathering suppliers and their assortments on the same platform</p>
                <Link className="button" to='/baronnect'>View Project</Link>
            </div>
            <div className="project-box">
                <h1>Metaweb</h1>
                <img className="box-image" src="/resources/metacraft.png" alt="project"></img>
                <h2>Frontend, UX Design, Testing</h2>
                <p className="box-text"> A website made for visualizing statistics and information about players and their behaviors on the MetaCraft minecraft server</p>
                <Link className="button" to='/metaweb'>View Project</Link>
            </div>
            <div className="project-box">
                <h1>Hjoy</h1>
                <img className="box-image" src="/resources/hjoy.png" alt="project"></img>
                <h2>Frontend, UX design</h2>
                <p className="box-text"> Designing the website for a 3D puzzle platformer that utilizes liquid mechanics by using a water gun. (NOT ADDED)</p>
                <Link className="button" to='/hjoy'>View Project</Link>


            </div>
        </motion.div >
    )
}
export default Projects;
