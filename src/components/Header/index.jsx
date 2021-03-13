import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    counter: {
        color: "#fff",
        display: "flex"
    },
    logo: {
        "& img": {
            width: "20%",

        }
    },
    header: {
        width: "100%",
        height: 80,
        borderRadius: 0,
        padding: "0px 55px",
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between"
    },
    count: {
        marginRight: 20,
        display: "flex",
        "& span": {
            paddingLeft: 10
        }
    }
});

export const Header = ({count, page}) => {
    const classes = useStyles();
    return (
      <div className={classes.header}>
            <div className={classes.logo}>
                <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG25.png" alt="logo"/>
            </div>
            <div className={classes.counter}>
                <Typography className={classes.count}>{page} <span>страницы</span></Typography>
                <Typography className={classes.count}>{count} <span>планет</span></Typography>

                
            </div>
      </div>
    )
}
