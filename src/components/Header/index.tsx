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
    margin: 20,
    width: 300,
    height: 80,
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10
  }


});

export const Header = () => {
    const classes = useStyles();
    return (
      <div className={classes.planetItem}>
            
      </div>
    )
}