import React from "react"
import SingleCocktail from "./SingleCocktail.js"
import { useGlobalContext } from "../context"
import spinner from "../assets/loader.gif"
import { Link } from "react-router-dom"

const Cocktails = () => {
  const { data, error, loading, searchMode, searchTerm, changeSearchMethod } = useGlobalContext()
  const listType = searchTerm.listSearch
  const listPrintMode = searchTerm.searchList
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
  if (searchMode) {
    return data.drinks ? (
      <div className="cocktails-content">
        {data.drinks.map((elem, index) => {
          return <SingleCocktail {...elem} key={index} />
        })}
      </div>
    ) : (
      <h1 className="not-found">No cocktail matches your search</h1>
    )
  } else {
    switch (listPrintMode) {
      case "list":
        if (listType === "g") {
          return (
            <div className="category-card-container">
              {data.drinks.map((elem, index) => {
                return elem.strGlass !== "" ? (
                  <div
                    key={index}
                    className="category-card"
                    onClick={() => changeSearchMethod(elem.strGlass, "listByFilter", "g")}
                  >
                    {elem.strGlass}
                  </div>
                ) : null
              })}
            </div>
          )
        } else if (listType === "c") {
          return (
            <div className="category-card-container">
              {data.drinks.map((elem, index) => {
                return elem.strCategory !== "" ? (
                  <div
                    key={index}
                    className="category-card"
                    onClick={() => changeSearchMethod(elem.strCategory, "listByFilter", "c")}
                  >
                    {elem.strCategory}
                  </div>
                ) : null
              })}
            </div>
          )
        } else {
          return null
        }
      case "filter":
        return (
          <div className="category-card-container">
            {data.drinks.map((elem, index) => {
              return (
                <div key={index}>
                  <div className="single-cocktail">
                    <div className="image-container">
                      <img src={elem.strDrinkThumb} alt={elem.strDrink} />
                    </div>
                    <div className="drink-info">
                      <h3 className="title">{elem.strDrink}</h3>
                      <button>
                        <Link to={`/cocktail/${elem.idDrink}`}>Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      default:
        return null
    }
  }
}

export default Cocktails
