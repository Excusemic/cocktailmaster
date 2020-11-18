import React from "react"
import SingleCocktail from "./SingleCocktail.js"
import { useGlobalContext } from "../context"
import spinner from "../assets/loader.gif"

const Cocktails = () => {
  const { data, error, loading } = useGlobalContext()
  if (loading) {
    return (
      <div className="loader">
        <img src={spinner} alt="Loading..." />
      </div>
    )
  }
  if (error) {
    return <h1>There was an error... Sorry</h1>
  }

  return data.drinks ? (
    <div className="cocktails-content">
      {data.drinks.map((elem) => {
        return <SingleCocktail {...elem} key={elem.idDrink} />
      })}
    </div>
  ) : (
    <h1 className="not-found">Can't find anything</h1>
  )
}

export default Cocktails
