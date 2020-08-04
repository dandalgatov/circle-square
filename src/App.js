import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'

import Home from './screens/Home/Home'
import About from './screens/About/About'
import Work from './screens/Work/Work'
import Contact from './screens/Contact/Contact'



function App() {
  return (
    <div className='App'>
      <div  className='container'>
        <Header />
        <body className='body'>
          <Switch>
            <Route exact path="/" render={() =>
              <Home />
            } />

            <Route exact path="/about" render={() =>
              <About />
            } />

            <Route exact path="/work" render={() =>
              <Work />
            } />

            <Route exact path="/contact" render={() =>
              <Contact />
            } />
          </Switch>
        </body>
      </div>
    </div>
  );
}

export default App;
