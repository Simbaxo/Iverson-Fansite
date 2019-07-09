import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import './App.css'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={About} />
      </Switch>
    </div>
  )
}

export default App