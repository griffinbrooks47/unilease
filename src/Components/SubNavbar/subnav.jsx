import './subnav.css';
import React, { useState} from 'react';

export const SubNavbar = (props) => {

    return (
        <main className='subnav'>
            <ul className="subnav-nav">{ props.children }</ul>
        </main>
    )
}

export const SubNavItem = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <a href='#' className='nav-item-button' onClick={() => setOpen(!open)}>
                {props.text}
            </a>
            {open && props.children}
        </li>
    )
}

export const DropdownMenu = (props) => {

    return (
        <div className='dropdown'>
            
        </div>
    )
}