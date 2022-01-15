import React from 'react'
import '../css/tool.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
       <nav className='navbar'>
        <ul className='navUl'>
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/players">Players</NavLink>
            <NavLink className='nav-link' to="/create">CREATE</NavLink>
        </ul>
       </nav>
    )
}

export default Header
