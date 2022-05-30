import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Nav from './Nav';


// Här kan man ha en bild på varje projekt och titel, där man därefter kan klicka sig dit och så får man mer information 
// Skapa en fil där jag har alla projekt, deras namn, path, text om projektet och bild. Ha istället en loop som skapar lådor för varje projekt. 

function Projects() {

    const close_sidebar = () => {
        return <Nav />
    }
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
                <Link onClick={close_sidebar} className="button" to='/baronnect'>More Information</Link>
            </div>
            <div className="project-box">
                <h1>Metaweb</h1>
                <img className="box-image" src="/resources/metacraft.png" alt="project"></img>
                <h2>Frontend, UX Design, Testing</h2>
                <p className="box-text"> A website made for visualizing statistics and information about players and their behaviors on the MetaCraft minecraft server</p>
                <Link className="button" to='/metaweb' >More Information</Link>
            </div>
            <div className="project-box">
                <h1>H<sub>j</sub>Oy</h1>
                <img className="box-image" src="/resources/logo3.png" alt="project"></img>
                <h2>Frontend, Project Management</h2>
                <p className="box-text"> Designing and coding the website for a 3D puzzle platformer that utilizes liquid mechanics to complete puzzles</p>
                <Link className="button" to='/hjoy'>More Information</Link>


            </div>
        </motion.div >
    )
}
export default Projects;
