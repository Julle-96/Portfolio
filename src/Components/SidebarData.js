import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'About me ',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    }, {
        title: 'Contact',
        path: '/',
        icon: <AiIcons.AiOutlineMessage />,
        cName: 'nav-text'
    },


]