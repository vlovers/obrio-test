import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

export const PlanetInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.planetItem}>
            <Typography className={classes.planetName}>Планета: Tatooine</Typography>
            <Typography className={classes.planetClimate}>Климат: Arid</Typography>
            <Typography className={classes.planetPopulation}>Период оборота: 304</Typography>
            <Typography className={classes.planetPopulation}>Диаметр: 10465</Typography>
            <Typography className={classes.planetPopulation}>Гравитация: 1 standard</Typography>
            <Typography className={classes.planetPopulation}>Тип местности: 200000</Typography>
            <Typography className={classes.planetPopulation}>Население: 200000</Typography>
            <div className={classes.planetPopulation}>
              Известные жители: 
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
              <Typography>Oleg</Typography>
            </div>
        </div>
    )
}
