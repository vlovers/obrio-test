import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	planetName: {
	},
	planetPopulation: {
		
	},
	backBtn: {
        marginLeft: 60,
        marginTop: 20,

        "& a": {
            color: "#000",
            textDecoration: "none"
        }
    },
    planetItem: {
        width: 300,
        marginLeft: 60,
		margin: 20,

		backgroundColor: "#f2f2f2",
		padding: 15,
		borderRadius: 10
	}
});

export const Resident = ({item}) => {
	let {name, height, mass, gender} = {...item}
    const classes = useStyles();
    return (
		<>
			<Button className={classes.backBtn} variant="contained"> 
				<Link to="/planet">
					Назад                 
				</Link>
			</Button>
			<div className={classes.planetItem}>
				<Typography className={classes.planetName}>Имя: {name}</Typography>
				<Typography className={classes.planetClimate}>Рост: {height}</Typography>
				<Typography className={classes.planetPopulation}>Вес: {mass}</Typography>
				<Typography className={classes.planetPopulation}>Пол: {gender}</Typography>
			</div>
		</>
    )
}
