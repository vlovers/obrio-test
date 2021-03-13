import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {
    Link
  } from "react-router-dom";
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

export const PlanetInfo = ({item, selectPeople}) => {

    let {name ,rotation_period,diameter,climate,gravity,terrain,population,residents} = {...item}

    const classes = useStyles();
    return (
        <div className={classes.planetItem}>
            <Typography className={classes.planetName}>Планета: {name}</Typography>
            <Typography className={classes.planetClimate}>Климат: {climate}</Typography>
            <Typography className={classes.planetPopulation}>Период оборота: {rotation_period}</Typography>
            <Typography className={classes.planetPopulation}>Диаметр: {diameter}</Typography>
            <Typography className={classes.planetPopulation}>Гравитация: {gravity}</Typography>
            <Typography className={classes.planetPopulation}>Тип местности: {terrain}</Typography>
            <Typography className={classes.planetPopulation}>Население: {population}</Typography>
            <div className={classes.planetPopulation}>
                Известные жители: 
                {
                    residents && residents.map(resident => (
                        <Link to="/people">
                            <Typography onClick={() => selectPeople(resident)}>{resident.name}</Typography>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
