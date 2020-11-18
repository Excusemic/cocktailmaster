import React from "react"

const Printcocktails = (drink) => {
  const { strInstructions, strDrink, strAlcoholic, strGlass, strDrinkThumb, strCategory } = drink
  let ingredients = []
  let measures = []
  for (let i = 1; i <= 15; i++) {
    let iterateIng = `strIngredient${i}`
    let interateMea = `strMeasure${i}`
    let ingredient = `${drink[iterateIng]}`
    let measure = `${drink[interateMea]}`
    if (ingredient !== "null") {
      ingredients.push(ingredient)
      measures.push(measure)
    }
  }
  return (
    <div className="drink-page-container">
      <h1>{strDrink}</h1>
      <div className="drink-page-content">
        <div className="drink-page-image-container">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="drink-page-info">
          <div className="single-info">
            <h4>Name:</h4>
            <p>{strDrink}</p>
          </div>
          <div className="single-info">
            <h4>Category:</h4>
            <p>{strCategory}</p>
          </div>
          <div className="single-info">
            <h4>Info:</h4>
            <p>{strAlcoholic}</p>
          </div>
          <div className="single-info">
            <h4>Glass:</h4>
            <p>{strGlass}</p>
          </div>
          <div className="single-info">
            <h4>Instructions:</h4>
            <p>{strInstructions}</p>
          </div>
          <div className="single-info">
            <h4>Ingredients:</h4>
            {ingredients.map((ingredient, index) => {
              return (
                <div key={index}>
                  <p style={{ marginRight: ".3em" }}>{ingredient}</p>
                  <p>{measures[index] !== "null" ? measures[index] : "By choice"}</p>
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Printcocktails
