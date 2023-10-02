import React from 'react'

export default function Navbar() {
  return (
    <>
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
    </>
    
  )
}
