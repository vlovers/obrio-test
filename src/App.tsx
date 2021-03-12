import axios from 'axios';
import React from 'react';
import './App.css';
import { PlanetItems } from './components/PlanetItems';
import { PlanetInfo } from './components/PlanetInfo';
import { Resident } from './components/Resident';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
        <Router>
        <Route path="/planets">
            <PlanetItems/>
        </Route>

        <Route path="/planet/1">
            <PlanetInfo/>
        </Route>
            
        <Route path="/peaple/1">
            <Resident/>
        </Route>
            
        </Router>
    </div>
  );
}

export default App;
