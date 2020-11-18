import React, { useRef, useEffect } from "react"
import { useGlobalContext } from "../context"

const Form = () => {
  const inputContainer = useRef("")
  const { searchCocktails } = useGlobalContext()
  useEffect(() => {
    inputContainer.current.focus()
  }, [inputContainer])
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="cocktail">Search for your favourite drink:</label>
      <input
        type="text"
        name="cocktail"
        ref={inputContainer}
        onChange={() => searchCocktails(inputContainer.current.value)}
      />
    </form>
  )
}

export default Form
