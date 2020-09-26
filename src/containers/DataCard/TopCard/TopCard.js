import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Card, CardContent} from "@material-ui/core";
import {Telegram} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 90,
        height: '46px'

    },
    iconCard: {
        margin: theme.spacing(1),
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
    },
    iconCardContent: {
        display: "flex",
        alignItems: "center",
        textAlign: "left",
    },
    cardContent: {
        padding: "5px 0",
        alignItems: "center",
        display: "flex",
    },
    extendedIcon: {
        marginRight: theme.spacing(2),
    },
    output: {
        marginTop: '25%',
    },
    displayContent: {
        padding: '4px',
        alignItems: 'center',
        marginLeft: '2px'
    }

}));


const TopCard = () => {
    const classes = useStyles();

    return (
        <Grid container xs={12} spacing={1}>
            <Grid item xs={5} id="sell-grid">
                <Card
                    id="sell-card"
                    className={classes.root}
                    style={{backgroundColor: '#d02b3f'}}
                >
                    <CardContent className={classes.cardContent}>
                        <Grid container xs={8} spacing={3} className={classes.displayContent} >
                            <Grid item xs={2}>
                                <Telegram className={classes.extendedIcon}/>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.iconCardContent}>
                                    9562.47 Sell
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} id="data-grid">
                <div id="data-output" className={classes.output}>
                    18.5
                </div>

            </Grid>

            <Grid item xs={5} id="buy-grid">
                <Card
                    id="buy-card"
                    className={classes.root}
                    style={{backgroundColor: '#32CD32', }}
                >
                    <CardContent className={classes.cardContent}>
                        <Grid container xs={8} spacing={3} className={classes.displayContent}>
                            <Grid item xs={2}>
                                <Telegram className={classes.extendedIcon}/>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={classes.iconCardContent}>
                                    9580.52 Buy
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    );

};

export default TopCard;
