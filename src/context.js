import React, { useContext, useReducer, useEffect, useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { reducer } from "./reducer"

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a")
  const initialState = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
  )
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: "GLOBAL_STATE_UPDATE", payload: initialState })
  }, [initialState])

  const searchCocktails = (param) => {
    setSearchTerm(param)
  }
  return <AppContext.Provider value={{ ...state, searchCocktails }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
