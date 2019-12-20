import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Character from './Character'
import CharacterContainer from "./CharacterContainer"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={CharacterContainer} />
        <Route path="/" component={Character} />
      </Switch>
    </Router>
  );
}

export default App;
