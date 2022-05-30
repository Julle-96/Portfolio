import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Hjoy() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Hjoy">
            <Link className="back-button" to="/projects">Projects</Link>
            <h1>H<sub>j</sub>Oy March 2022 - June 2022</h1>
            <div className='project-container'>

                <div className="project-text">
                    <h3>What is H<sub>j</sub>Oy?</h3><br></br>
                    <p>H<sub>j</sub>Oy is a project created in the course Computer Game Design at KTH. Although the project was about developing an idea through a concept description,
                        a target group analysis, a defined tech platform, a business plan, I have chosen to showcase the website here.
                        <br></br> <br></br> In this project we were 5 collaborators: Julius Albiz, Jacob Brännström, Emrik Hydén, Martina Lacková and Jacky Liu.
                    </p>

                    <h3>Role and Contributions</h3><br></br>
                    <p>In this project I had the role of Project manager and Frontend Developer. As the creation of the game was the goal of the project, I took the role of creating
                        the website in which the game would be displayed. The website was created using React.js.
                        <br></br> <br></br>
                    </p>

                    <a className="button" href='https://hjoy.herokuapp.com/' target="_blank" rel="noreferrer" >Visit the Website</a>



                </div>
                <div className="image-container">
                    <img className="project-image" src="/resources/hjoy.png" alt="project"></img>
                </div>

            </div>
        </motion.div>
    )
}
export default Hjoy;
