import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({

    planetTypography: {
        color: "#000",
        textDecoration: "none",

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
            <Typography  className={classes.planetTypography}>Планета: {name}</Typography>
            <Typography className={classes.planetTypography}>Климат: {climate}</Typography>
            <Typography className={classes.planetTypography}>Население: {population}</Typography>
        </div>
    )
}
