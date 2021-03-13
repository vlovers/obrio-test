import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { PlanetInfo, Header, PlanetItems, Resident } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { planetsActions, peopleActions } from './redux/actions';

const useStyles = makeStyles({
    catalogWrapper: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 50,
        boxSizing: "border-box",
        background: "url(https://cdn.wallpapersafari.com/1/97/co341S.jpg)"
    }
});

function App({planets, fetchPlanets, fetchSelectPlanet, selectPlanet, planetsCount, planetsPage, setPeople, people, nextPageErr}) {
    const classes = useStyles();

    React.useEffect(() => {
        fetchPlanets()
    }, [])

    //Выбрана планета
    const onSelectItem = (url) => {
        fetchSelectPlanet(url)
        
    }
    //Выбран человек
    const onSelectPeople = (data) => {
        setPeople(data)
    }
    //Загрузка новых планет   
    const onLoadMore = () => {
        fetchPlanets()
    }
  
    return (
    <div className={classes.catalogWrapper}>
        <Router>
        <Route path="/">
            <Header page={planetsPage} count={planetsCount}/>
        </Route>
        <Route exact path={["/planets", "/"]}>
            <PlanetItems 
                nextPageErr={nextPageErr}
                onLoadMore={onLoadMore} 
                selectItem={onSelectItem} 
                planets={planets && planets}/>
        </Route>

        <Route path={`/planet`}>
            <PlanetInfo 
                name={selectPlanet.name} 
                rotation_period={selectPlanet.rotation_period}
                diameter={selectPlanet.diameter}
                climate={selectPlanet.climate}
                gravity={selectPlanet.gravity}
                terrain={selectPlanet.terrain}
                population={selectPlanet.population}
                residents={selectPlanet.residents}
                selectPeople={onSelectPeople} 
                item={selectPlanet}/>
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
        planetsPage: planets.planetsPage,
        planetsCount: planets.planetsCount,
        nextPageErr: planets.nextPageErr

    }),
    {...planetsActions, ...peopleActions}
)(App);
