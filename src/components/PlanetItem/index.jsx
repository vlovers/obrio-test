import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import axios from 'axios'
import planets from '../../redux/reducers/planets';
const useStyles = makeStyles({
  planetName: {
  },
  planetPopulation: {
      
  },
  planetClimate: {

  },
  planetItem: {
    width: 300,
    margin: 20,
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10
  }


});

export const PlanetItem = ({selectItem, planet}) => {
    let {name, climate, population, url} = {...planet};

    const classes = useStyles();
    return (
        <div onClick={() => selectItem(url)} className={classes.planetItem}>
            <Typography  className={classes.planetName}>Планета: {name}</Typography>
            <Typography className={classes.planetClimate}>Климат: {climate}</Typography>
            <Typography className={classes.planetPopulation}>Население: {population}</Typography>
        </div>
    )
}
