import React from "react"
import Cocktail from "./Views/Cocktail"
import Home from "./Views/Home"
import About from "./Views/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <Cocktail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
