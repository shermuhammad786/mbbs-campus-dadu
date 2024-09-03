import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-image'>
          <img src="/Asset/usindh-logo.png" />
        </div>
        <div className='navbar-content'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <button>Admission Open</button>
          </ul>
        </div>
      </div>
    </div>
  )
}
