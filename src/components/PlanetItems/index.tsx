import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { PlanetItem } from '../PlanetItem';

const useStyles = makeStyles({
  planetName: {
  },
  planetPopulation: {
      
  },
  planetClimate: {

  },
  planetItem: {
    width: 300,
    height: 80,
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10
  }


});

export const PlanetItems = () => {
    const classes = useStyles();
    return (
        <>
            <PlanetItem/>
            <PlanetItem/>
            <PlanetItem/>
            <PlanetItem/>
            <PlanetItem/>
        </>
    )
}
