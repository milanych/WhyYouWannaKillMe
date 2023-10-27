import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/heroes">Heroes</NavLink>
        <NavLink to="/fight">Fight!</NavLink>
      </nav>
    </header>
    </>
  )
}
