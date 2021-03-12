import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import axios from 'axios'
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

export const PlanetItem = () => {
   
    const classes = useStyles();
    return (
        <div className={classes.planetItem}>
            <Typography className={classes.planetName}>Планета: Tatooine</Typography>
            <Typography className={classes.planetClimate}>Климат: Arid</Typography>
            <Typography className={classes.planetPopulation}>Население: 200000</Typography>
        </div>
    )
}
