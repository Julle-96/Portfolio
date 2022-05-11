import React from 'react';
import { motion } from 'framer-motion';


function Baronnect() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Baronnect">
            <h1>Baronnect January 2022 - present</h1>
            <div className='project-container'>
                <div className="project-text">
                    <p>Baronnect is an individual project that I started when studying the course Ideation at Stockholm School of Entreprenurship.
                        The goal of the course was to come up with a business idea and from there be able to develop it into a business model.
                        Baronnect is a website platform tailored for restaurants that have several different suppliers. The restaurant business in Stockholm
                        was chosen due to me having years of experience within the industry, which is beneficial for gaining insights and accessing the user group.
                        <br></br> <br></br> In the restaurant business in Stockholm, many restaurants have to make purchases from several different suppliers,
                        that all have their own niche products and website that the orders are placed from.
                        This means that the staff that places orders has to log in to several different webpages to place their orders. Baronnect is therefore seen as a portal where
                        all of the restaurants suppliers are connected and their assortments displayed. This allows the restaurants to have one single basket with all of the products
                        from the different suppliers, and when confirmed, the order is automatically divided up based on the products and sent to the suppliers webpages and purchased.
                        As the restaurant business is both understaffed and overworked, Baronnect will help restaurants cut the time needed to place orders, and instead redistribute staff
                        where they are needed.
                        <br></br> <br></br> After the course was finished in March 2022, I chose to further work on this idea and produced the first sketches that can be seen in the image.
                        The next step is to test this sketch on restaurant staff that place orders, and thereafter start working on a prototype in Figma.
                    </p>
                </div>
                <img className="project-image" src="/resources/sketch.jpg" alt="project"></img>
            </div>
        </motion.div>
    )
}
export default Baronnect;
