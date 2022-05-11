import React from 'react';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Baronnect from './projects/Baronnect';
import Hjoy from './projects/Hjoy';
import Metaweb from './projects/Metaweb';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/baronnect" component={Baronnect} />
                <Route path="/hjoy" component={Hjoy} />
                <Route path="/metaweb" component={Metaweb} />
            </Switch>
        </AnimatePresence>
    )
}
export default AnimatedRoutes;
