import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Character from './Character'
import CharacterContainer from "./CharacterContainer"
import FormContainer from "./FormContainer"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/form" component={FormContainer} />
        <Route path="/:id" component={CharacterContainer} />
        <Route path="/" component={Character} />
      </Switch>
    </Router>
  );
}

export default App;
