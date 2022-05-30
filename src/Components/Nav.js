import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Nav.css';
import { IconContext } from 'react-icons';



function Nav() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div>
                        <a href="https://www.linkedin.com/in/julius-albiz-65b1a2172/" target="_blank" rel="noreferrer">
                            <AiIcons.AiOutlineLinkedin size={30} className="nav-icons" />
                        </a>
                        <a href="https://github.com/Julle-96" target="_blank" rel="noreferrer">
                            <AiIcons.AiOutlineGithub size={30} className="nav-icons" />
                        </a>
                    </div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav></IconContext.Provider>
        </>
    )
}

export default Nav;

