import React, { useContext, useReducer, useEffect, useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { reducer } from "./reducer"

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState({
    searchText: "a",
    searchList: "search",
    listSearch: "s",
    isText: true,
    isList: false,
  })
  let url = `https://www.thecocktaildb.com/api/json/v1/1/${searchTerm.searchList}.php?${searchTerm.listSearch}=${searchTerm.searchText}`
  const initialState = useFetch(url, searchTerm)
  const [state, dispatch] = useReducer(reducer, { ...initialState, searchMode: true })

  useEffect(() => {
    const { isText, isList } = searchTerm
    if (isText) {
      dispatch({ type: "GLOBAL_STATE_UPDATE_TO_SEARCH", payload: initialState })
    }
    if (isList) {
      dispatch({ type: "GLOBAL_STATE_UPDATE_TO_LIST", payload: initialState })
    }
  }, [initialState, searchTerm])

  const searchCocktails = (param) => {
    setSearchTerm({ ...searchTerm, searchText: param, listSearch: "s", searchList: "search" })
  }
  const resetData = () => {
    setSearchTerm({
      searchText: "a",
      searchList: "search",
      listSearch: "s",
      isText: true,
      isList: false,
    })
  }
  const randomCocktail = () => {
    setSearchTerm({
      searchText: "",
      searchList: "random",
      listSearch: "",
      isText: true,
      isList: false,
    })
  }
  const resetSearchMode = () => {
    console.log("asd")
    dispatch({ type: "RESET_SEARCH_MODE" })
  }
  const changeSearchMethod = (val, filterName, listFilter) => {
    if (filterName !== "listByFilter") {
      if (val !== "name") {
        setSearchTerm({
          searchList: "list",
          listSearch: val,
          searchText: "list",
          isText: false,
          isList: true,
        })
      } else {
        setSearchTerm({
          searchList: "search",
          listSearch: "s",
          searchText: "a",
          isText: true,
          isList: false,
        })
      }
    } else {
      let filteredVal = val.split(" ").join("_")
      setSearchTerm({
        breadCrumb: { listFilter, val },
        searchList: "filter",
        listSearch: listFilter,
        searchText: filteredVal,
        isText: false,
        isList: true,
      })
    }
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        searchCocktails,
        changeSearchMethod,
        searchTerm,
        resetData,
        randomCocktail,
        resetSearchMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
