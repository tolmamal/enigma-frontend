import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
        top: 0,
        right: 0,
        position: 'absolute',
    },
    button: {
        backgroundColor: '#2f3b4b'
    }
}));


const ChartHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense">
                    <Typography variant="subtitle1" >
                        BTC-USD-CME
                    </Typography>
                    <div className={classes.buttons}>
                        <Button className={classes.button} variant="contained" color="primary">
                            1H
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary">
                            1D
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary">
                            1W
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary">
                            1M
                        </Button>
                    </div>

                </Toolbar>
            </AppBar>

        </div>
    );

};

export default ChartHeader;
