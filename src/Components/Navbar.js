import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
import Form from "./Form"

const Navbar = () => {
  const { resetData, randomCocktail } = useGlobalContext()
  return (
    <nav>
      <Link to="/" onClick={resetData}>
        <h2>CocktailMaster</h2>
      </Link>
      <Form />
      <ul>
        <li>
          <Link to="/" onClick={resetData}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">
            <button className="randomCocktail" onClick={randomCocktail}>
              Get random cocktail
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
