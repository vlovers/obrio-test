import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { PlanetItem } from '../PlanetItem';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    planetsWrapp: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& a": {
            textDecoration: "none"
        }
    }
});

export const PlanetItems = ({planets, selectItem, onLoadMore, nextPageErr}) => {

    const classes = useStyles();
    
    return (
        <div className={classes.planetsWrapp}>
            {planets && planets.map((planet, index) => (
                <Link key={index} to="planet">
                    <PlanetItem 
                        planet={planet}
                        name={planet.name}
                        selectItem={selectItem}
                        />
                </Link>
                ))
            }

            <Button disabled={nextPageErr} onClick={onLoadMore} variant="contained">Load More</Button>
        </div>
    )
}
