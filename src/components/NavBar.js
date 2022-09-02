import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <h1>User Data</h1>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/contacts'>Contact</Link>
        </ul>
    </nav>
  )
}

export default NavBar;
