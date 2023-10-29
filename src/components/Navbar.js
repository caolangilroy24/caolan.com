import React from 'react'
import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
      <Router>
        <nav data-testid='navbar' className='nav'>
            <NavLink data-testid='nav-home' href='/' className='site-title'>Caolan.com</NavLink>
          <ul>
            <li>
              <NavLink data-testid='nav-search' href='/citysearch'>City Search</NavLink>
            </li>
            <li>
              <NavLink data-testid='nav-tik' href='/tictac'>Tic Tac Toe</NavLink>
            </li>
            <li>
              <NavLink data-testid='nav-tdl' href='/todolist'>To Do List</NavLink>
            </li>
            <li >
              <NavLink data-testid='nav-blog' href='/blog'>Blog</NavLink>
            </li>
          </ul>
        </nav>
      </Router>
  
    </>
    
  )
}
