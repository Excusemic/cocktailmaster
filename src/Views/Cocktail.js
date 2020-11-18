import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import Printcocktails from "../Components/Printcocktails"
import spinner from "../assets/loader.gif"

const Cocktail = () => {
  const { id } = useParams()
  const cocktailData = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  const [cocktail, setCocktail] = useState(cocktailData)
  const { loading, error, data } = cocktail
  useEffect(() => {
    const { loading } = cocktailData
    if (!loading) {
      setCocktail(cocktailData)
    }
  }, [cocktailData])
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
  if (data) {
    if (data.drinks) {
      const { drinks } = data
      const drink = drinks[0]
      return <Printcocktails {...drink} />
    } else {
      return <div>No drinks here</div>
    }
  }
}

export default Cocktail
