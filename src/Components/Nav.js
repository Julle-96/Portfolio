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
    /*
    return (
        <nav>
            <Link style={navStyle} to='/'>
                <div className='home-button'>

                    <h2>Home</h2>
                </div>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/work'>
                    <li className="nav-button">Work Life</li>
                </Link>
                <Link style={navStyle} to='/projects'>
                    <li className="nav-button">Projects</li>
                </Link>
            </ul>
        </nav>
    )
    */
}

export default Nav;
