import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '1vw',
    };
    return (
        <nav>
            <Link to='/'>
                <img src='public/julius.jpg' class="home-logo" alt='homepage'></img>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/Story'>
                    <li>Story</li>
                </Link>
                <Link style={navStyle} to='/Video'>
                    <li>Video</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
