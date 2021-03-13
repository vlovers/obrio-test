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

export const Resident = ({item}) => {
	let {name, height, mass, gender} = {...item}
    const classes = useStyles();
    return (
        <div className={classes.planetItem}>
			<Typography className={classes.planetName}>Имя: {name}</Typography>
			<Typography className={classes.planetClimate}>Рост: {height}</Typography>
			<Typography className={classes.planetPopulation}>Вес: {mass}</Typography>
			<Typography className={classes.planetPopulation}>Пол: {gender}</Typography>
        </div>
    )
}
