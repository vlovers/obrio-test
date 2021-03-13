import axios from 'axios';
import React from 'react';
import './App.css';
import {connect} from 'react-redux';

import { PlanetItems } from './components/PlanetItems';
import { PlanetInfo } from './components/PlanetInfo';
import { Resident } from './components/Resident';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import { planetsActions, peopleActions } from './redux/actions';
import { Header } from './components/Header';
import createHistory from 'history/createBrowserHistory';

function App({planets, fetchPlanets, fetchSelectPlanet, selectPlanet, planetsCount, setPeople, people}) {
    const history = createHistory();   

    console.log(history);
    
    React.useEffect(() => {
        fetchPlanets()
    }, [])

    const selectItem = (url) => {
        fetchSelectPlanet(url)
        // history.push("/planet/1");

    }

    const selectPeople = (data) => {

        setPeople(data)
        // history.push("/planet/1");
        
    }

    const onLoadMore = () => {
        fetchPlanets()
    }
  
    return (
    <div className="App">
        <Router>
        <Route path="/">
            <Header count={planetsCount}/>
        </Route>
        <Route path="/planets">
            <PlanetItems onLoadMore={onLoadMore} selectItem={selectItem} planets={planets && planets}/>
        </Route>

        <Route path={`/planet`}>
            <PlanetInfo selectPeople={selectPeople} item={selectPlanet}/>
        </Route>
            
        <Route path="/people">
            <Resident item={people}/>
        </Route>
            
        </Router>
    </div>
  );
}

export default connect( 
    ({planets, people}) => ({
        planets: planets.items,
        selectPlanet: planets.selectPlanet,
        people: people.selectPeople,
        planetsCount: planets.planetsCount

    }),
    {...planetsActions, ...peopleActions}
)(App);
