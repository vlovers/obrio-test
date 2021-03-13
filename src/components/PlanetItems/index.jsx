import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { PlanetItem } from '../PlanetItem';
import { planetsActions } from '../../redux/actions';
import {
    Link
  } from "react-router-dom";
const useStyles = makeStyles({
    planetsWrapp: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    loadMoreBtn: {

    }

});

export const PlanetItems = ({planets, selectItem, onLoadMore}) => {

    // planetsActions.fetchPlanets();
    const classes = useStyles();

    
    return (
        <div className={classes.planetsWrapp}>
            {planets && planets.map((planet, index) => (
                <Link to="planet">
                    <PlanetItem 
                        planet={planet}
                        key={index}
                        name={planet.name}
                        selectItem={selectItem}
                        />
                </Link>
                ))
            }

            <Button onClick={onLoadMore} variant="contained">Load More</Button>
        </div>
    )
}
