"use client"
import React, { useState } from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function Navbar() {
  const [sm_navbar, setSm_navbar] = useState(false)
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
            <li className='nav-semester'>Semeters
              <ul className='nav-sub-semesters'>
                <li>First Semester</li>
                <li>Second Semester</li>
                <li>Third Semester</li>
                <li><Link href={"/semesters/forth"}>Forth Semester</Link></li>
              </ul>
            </li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <button>Admission Open</button>
          </ul>
        </div>
      </div>

      <div className='sm-navbar-container'>
        <div className='sm-navbar-togle-wrapper'>
          <div className='navbar-image'>
            <img src="/Asset/usindh-logo.png" />
          </div>
          <div onClick={() => setSm_navbar(!sm_navbar)} className='togle-button'>
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
        {sm_navbar && <div className='sm-navbar'>
          <div className='sm-navbar-content'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li className='nav-semester'>Semeters
                <ul className='nav-sub-semesters sm-nav-sub-semesters'>
                  <li>First Semester</li>
                  <li>Second Semester</li>
                  <li>Third Semester</li>
                  <li><Link href={"/semesters/forth"}>Forth Semester</Link></li>
                </ul>
              </li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Contact</li>
              <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
              <button>Admission Open</button>
            </ul>
          </div>
        </div>}

      </div>

    </div>
  )
}
