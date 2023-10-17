import React from 'react'
import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function Navbar() {
  // return (
  //   <>
  //     <nav className='nav'>
  //       <a href='/' className='site-title'>Caolan.com</a>
  //       <ul>
  //         <li>
  //           <a href='/tictac'>Tic Tac Toe</a>
  //         </li>
  //         <li>
  //           <a href='/todolist'>To Do List</a>
  //         </li>
  //         <li>
  //           <a href='/blog'>Blog</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </>
    
  // )className='site-title'
{/* <NavLink to='/' style={ ({isActive}) => ({
            color: isActive? 'orange': 'white'})}>Caolan.com
          </NavLink> */}

  return (
    <>
      <Router>
        <nav className='nav'>
            <a href='/' className='site-title'>Caolan.com</a>
          <ul>
            <li>
              <a href='/tictac'>Tic Tac Toe</a>
            </li>
            <li>
              <a href='/todolist'>To Do List</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
        </nav>
      </Router>
  
    </>
    
  )
}
