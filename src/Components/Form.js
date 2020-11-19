import React, { useRef, useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import { Switch, Route } from "react-router-dom"

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
      setShowSeach(true)
      selectContainer.current.value = "name"
    }
  }, [searchMode])
  useEffect(() => {}, [inputContainer])
  return (
    <Route exact path="/">
      <div className="form-wrapper">
        <Switch>
          <Route path="/cocktail/:id">
            <div></div>
          </Route>
          <Route path="/" exact>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="label-wrapper">
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

              {showSearch ? (
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
          </Route>
        </Switch>
      </div>
    </Route>
  )
}

export default Form
