import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
              <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/super-heroes'>Traditional Super Heroes</NavLink>
              </li>
              <li>
                <NavLink to='/rq-super-heroes'>RQ Super Heroes</NavLink>
              </li>
              <li>
                <NavLink to='/test'>Testing</NavLink>
              </li>
            </ul>
          </nav>

    </>
  )
}
