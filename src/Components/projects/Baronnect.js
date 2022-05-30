import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Baronnect() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Baronnect">
            <Link className="back-button" to="/projects">Projects</Link>
            <h1>Baronnect January 2022 - present</h1>
            <div className='project-container'>
                <div className="project-text">
                    <h3>What is Baronnect</h3><br></br>
                    <p>Baronnect is an individual project that was started when studying the course Ideation at Stockholm School of Entreprenurship.
                        The goal of the course was to identify a problem within a industry of choice, start a busines idea and later develop it into a business model.

                        <br></br><br></br>Baronnect is a website platform tailored for restaurants that have several different suppliers.
                        Baronnect is therefore seen as a portal where
                        all of the restaurants suppliers are connected and their assortments displayed. This allows the restaurants to have one single basket with all of the products
                        from the different suppliers, and when confirmed, the order is automatically divided up based on the products and sent to the suppliers webpages and purchased.
                        As the restaurant business is both understaffed and overworked, Baronnect will help restaurants cut the time needed to place orders, and instead redistribute staff
                        where they are needed.
                    </p>

                    <br></br><h3>Role and Contributions</h3><br></br>
                    <p>As this is an individual project, I have been responsible for every part of this project, and the next step is to further develop the idea.
                        As can be seen in the image, low-fi sketches have been created to be able to visualize the idea. The next step is to test this sketch on restaurant staff that place orders,
                        and thereafter start working on a prototype in Figma.
                        After gaining insights on the prototype, a website will be worked on as a proof of concept
                    </p>



                </div>
                <img className="project-image" src="/resources/sketch.jpg" alt="project"></img>
            </div>
        </motion.div>
    )
}
export default Baronnect;
