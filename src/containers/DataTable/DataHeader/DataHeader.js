import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));


const DataHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense">
                    <Typography variant="h5" >
                        THRESHOLD  10000
                    </Typography>

                </Toolbar>
            </AppBar>

        </div>
    );

};

export default DataHeader;
