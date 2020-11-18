import React from "react"
import { Link } from "react-router-dom"

const SingleCocktail = ({ strDrink, strAlcoholic, strGlass, strDrinkThumb, idDrink }) => {
  return (
    <div className="single-cocktail">
      <div className="image-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="drink-info">
        <h3 className="title">{strDrink}</h3>
        <p className="glass">{strGlass}</p>
        <p className="alcoholic">{strAlcoholic}</p>
        <button>
          <Link to={`/cocktail/${idDrink}`}>Details</Link>
        </button>
      </div>
    </div>
  )
}
SingleCocktail.defaultProps = {
  strDrink: "unknown",
  strAcoholic: "unknown",
  strGlass: "unknown",
  strDrinkThumb:
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
}
export default SingleCocktail
