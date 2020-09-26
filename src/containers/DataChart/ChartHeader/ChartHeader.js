import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Button, Typography, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        backgroundColor: '#2f3b4b'
    }
}));


const ChartHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#2f3b4b' }}>
                <Toolbar variant="dense" style={{ padding: '2%' }}>
                    <Grid id="header-container" container xs={12} spacing={3} alignItems="center" style={{padding: "3px 0"}}>
                        <Grid id="header-title" item xs={5} style={{ whiteSpace: 'nowrap' }}>
                            <Typography variant="h6" >
                                BTC-USD-CME
                            </Typography>
                        </Grid>
                        <Grid container xs={7} spacing={1}>
                            <Grid id="button-1H" item xs={3}>
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1H
                                </Button>
                            </Grid>
                            <Grid id="button-1D" item xs={3}>
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1D
                                </Button>
                            </Grid>
                            <Grid id="button-1W" item xs={3}>
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1W
                                </Button>
                            </Grid>
                            <Grid id="button-1M" item xs={3}>
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1M
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>

        </div>
    );

};

export default ChartHeader;
