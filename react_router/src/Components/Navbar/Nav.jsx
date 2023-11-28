import React from 'react'
import "./index.css"
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink className={'navlink'} to="/">Home</NavLink>
      <NavLink className={'navlink'} to="/login">Login</NavLink>
      <NavLink className={'navlink'} to="/basket">basket</NavLink>
    </nav>
  )
}

export default Nav