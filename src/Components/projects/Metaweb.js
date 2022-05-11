import React from 'react';
import { motion } from 'framer-motion';


function Metaweb() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Metaweb">
            <h1>Metaweb January 2022 - March 2022</h1>
            <div className='project-container'>
                <div className="project-text">
                    <p>Metaweb is a group project that was created in the course Information Visualization at KTH.
                        In this project, an interactive webpage was created to visualize player and server statistics from the biggest Minecraft server at KTH, called METAcraft.
                        METAweb can therefore be used to find interesting player stats about yourself and other players at the server.
                        The goal of METAweb is to enhance the player experience for both players and admins, and at the same time provide information on player behavior through heatmaps and statistics
                        <br></br> <br></br> In this project we were 5 collaborators: Julius Albiz, Lisa Balzar, Leo Noharet, Agnes Shutrick and Andreas Wrife.
                        I had the role of front-end developer and UX designer.
                        <br></br> <br></br>
                    </p>
                    <a className="button" href='https://metawebb.herokuapp.com/index.html' target="_blank" rel="noreferrer" >Visit the Project</a>
                    <a className="button" href='https://www.figma.com/file/28Uv4jn7caPQfejd6vcHCr/InfoVis?node-id=0%3A1' target="_blank" rel="noreferrer" >Figma Prototype</a>


                </div>
                <div className="image-container">
                    <img className="project-image" src="/resources/metaweb.png" alt="project"></img>
                    <img className="project-image" src="/resources/sketch.jpg" alt="project"></img>
                </div>

            </div>
        </motion.div>
    )
}
export default Metaweb;
