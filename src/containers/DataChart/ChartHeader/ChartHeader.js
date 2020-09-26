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
        // top: 0,
        // right: 0,
        // position: 'absolute',
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

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense" style={{padding: "0 10px"}}>
                    <Grid id="header-container" container xs={12} spacing={1} alignItems="center" style={{padding: "3px 0"}}>
                        <Grid container item xs={8} id="header-title" alignItems="center" style={{ whiteSpace: 'nowarp', overflow: 'hidden' }}>
                            <Typography variant="h6" >
                                BTC-USD-CME
                            </Typography>
                        </Grid>
                        <Grid container xs={4} spacing={1}>
                            <Grid item xs={3} id="button1">
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1H
                                </Button>
                            </Grid>
                            <Grid item xs={3} id="button2">
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1D
                                </Button>
                            </Grid>
                            <Grid item xs={3} id="button3">
                                <Button className={classes.button} variant="contained" color="primary" size="small">
                                    1W
                                </Button>
                            </Grid>
                            <Grid item xs={3} id="button4">
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

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense" style={{padding: "0 10px"}}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={2}>
                                <Typography variant="h6" >
                                    BTC-USD-CME
                                </Typography>
                            </Grid>
                            <Grid container item xs={10} className={classes.buttons}>
                                <Grid container xs={12} spacing={2}>
                                    <Grid item xs={3}>
                                        <Button className={classes.button} variant="contained" color="primary" size="small">
                                            1H
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button className={classes.button} variant="contained" color="primary" size="small">
                                            1D
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button className={classes.button} variant="contained" color="primary" size="small">
                                            1W
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button className={classes.button} variant="contained" color="primary" size="small">
                                            1M
                                        </Button>
                                    </Grid>
                                </Grid>


                            </Grid>

                        </Grid>

                </Toolbar>
            </AppBar>

        </div>
    );


    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense">
                    <Typography variant="subtitle1" >
                        BTC-USD-CME
                    </Typography>
                    <div className={classes.buttons}>
                        <Button className={classes.button} variant="contained" color="primary" size="small">
                            1H
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" size="small">
                            1D
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" size="small">
                            1W
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" size="small">
                            1M
                        </Button>
                    </div>

                </Toolbar>
            </AppBar>

        </div>
    );

};

export default ChartHeader;
