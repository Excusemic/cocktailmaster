import React, { useRef, useEffect, useState } from "react"
import { useGlobalContext } from "../context"

const Form = () => {
  const inputContainer = useRef("")
  const selectContainer = useRef("")
  const { searchCocktails, changeSearchMethod, searchMode, searchTerm } = useGlobalContext()
  const breadcrumb = searchTerm.breadCrumb
  const { searchList } = searchTerm
  const [showSearch, setShowSeach] = useState(true)

  const handleChange = (e) => {
    changeSearchMethod(e)
    if (e === "name") {
      setShowSeach(true)
    } else {
      setShowSeach(false)
    }
  }
  useEffect(() => {
    if (searchMode) {
      selectContainer.current.value = "name"
    }
  }, [searchMode])
  useEffect(() => {
    inputContainer.current.focus()
  }, [inputContainer])
  return (
    <div className="form-wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="label-wrapper">
          <label htmlFor="cocktail">Search </label>
          <select
            name="by"
            id="by"
            onChange={(e) => handleChange(e.target.value)}
            ref={selectContainer}
          >
            <option default value="name">
              by name
            </option>
            <option value="c">by category</option>
            <option value="g">by glass</option>
          </select>
        </div>

        {showSearch || selectContainer.current.value === "name" ? (
          <input
            type="text"
            name="cocktail"
            ref={inputContainer}
            onChange={() => searchCocktails(inputContainer.current.value)}
          />
        ) : null}
        {searchList === "filter" ? (
          <div className="breadcrumb-container">
            <span onClick={() => handleChange(breadcrumb.listFilter)}>
              {breadcrumb.listFilter === "g" ? "Glass" : "Category"}
            </span>
            <span> / </span>
            <span>{breadcrumb.val}</span>
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default Form
