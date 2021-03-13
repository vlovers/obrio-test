import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
const useStyles = makeStyles({

    planetPopulation: {
        color: "#000",
        "& span": {
            width: 30000,
        }
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
        marginTop: 20,
        backgroundColor: "#f2f2f2",
        padding: 15,
        borderRadius: 10,
    }
});

export const PlanetInfo = ({item, selectPeople}) => {
    let {name, rotation_period, diameter, climate, gravity, terrain, population, residents} = {...item}

    const classes = useStyles();
    return (
        <>
            <Button className={classes.backBtn} variant="contained"> 
                <Link to="/planets">
                    Назад                 
                </Link>
            </Button>
            <div className={classes.planetItem}>
                <Typography className={classes.planetTypography}><span>Планета</span>: {name}</Typography>
                <Typography className={classes.planetTypography}><span>Климат</span>: {climate}</Typography>
                <Typography className={classes.planetTypography}><span>Период оборота</span>: {rotation_period}</Typography>
                <Typography className={classes.planetTypography}><span>Диаметр</span>: {diameter}</Typography>
                <Typography className={classes.planetTypography}><span>Гравитация</span>: {gravity}</Typography>
                <Typography className={classes.planetTypography}><span>Тип местности</span>: {terrain}</Typography>
                <Typography className={classes.planetTypography}><span>Население</span>: {population}</Typography>
                <div className={classes.planetPopulation}>
                    Известные жители: 
                    { 
                        residents && residents.length === 0 ? 
                            (<span> unknown</span>) 
                        :
                            (residents && residents.map((resident, index) => (
                                <Link key={index} to="/people">
                                    <Typography onClick={() => selectPeople(resident)}>{resident.name}</Typography>
                                </Link>
                            )))
                    }
                </div>
            </div>
        </>
    )
}
