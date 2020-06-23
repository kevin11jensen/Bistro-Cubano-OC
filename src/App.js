import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Menu from './components/Menu';



export default function App() {
  return (
    <div className="App">
      
      <Switch>
        
        <Route exact path = '/'>
          <LandingPage />
        </Route>
        <Route path = '/menu'>
          <Menu />
        </Route>
        
      </Switch>
      
    </div>                     
  );
}

