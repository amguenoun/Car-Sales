import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <aside class="menu">
            <ul class="menu-list">
                <li><Link to='/'>Home</Link></li>
            </ul>
        </aside>
    )
}

export default NavBar;