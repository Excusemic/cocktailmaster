import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>CocktailMaster</h2>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
