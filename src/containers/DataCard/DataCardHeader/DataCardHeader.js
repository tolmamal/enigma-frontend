import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { SwapHoriz } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    title: {
        padding: 1
    },
    icon: {
        fontSize: '2.5rem'
    }
}));

const DataCardHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#2f3b4b' }}>
                <Toolbar variant="dense" className={classes.title}>
                    <IconButton>
                        <SwapHoriz className={classes.icon}></SwapHoriz>
                    </IconButton>
                    <Typography variant="h5" >
                        BTC-USD
                    </Typography>

                </Toolbar>
            </AppBar>

        </div>
    );
};

export default DataCardHeader;
