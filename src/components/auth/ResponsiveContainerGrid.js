import React from "react";
import ResponsiveConstants from "./ResponsiveConstants";
import { Grid } from "@material-ui/core";
import { withStyles, createStyleSheet } from "material-ui/styles";

const styleSheet = createStyleSheet(theme => ({
    root: {
        [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
            "min-height": 500,
        }
    }
}));

function ResponsiveContainerGrid(props) {
    const classes = props.classes;
    const { children } = props;
    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            justify="center"
        >
            {children}
        </Grid>
    );
}

export default withStyles(styleSheet)(ResponsiveContainerGrid);
