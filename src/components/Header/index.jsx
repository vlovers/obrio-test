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
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#f2f2f2",
    borderRadius: 0,
    padding: "0px 55px",
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between"
  }


});

export const Header = ({count}) => {
    const classes = useStyles();
    return (
      <div className={classes.header}>
            <div>Logo</div>
            <div>{count}</div>
      </div>
    )
}
