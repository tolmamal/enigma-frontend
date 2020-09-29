import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextFieldSection from './TextFieldSection/TextFieldSection';
import TopCard from './TopCard/TopCard';
import DataCardHeader from '../../containers/DataCard/DataCardHeader/DataCardHeader';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Paper,
    Grid,
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    sellCard: {
        color: theme.palette.success,

    },
    buyCard: {
        color: theme.palette.warning,

    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(2),
    },
    textField: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    bottomSection: {
        marginLeft: 10
    },
    gridContent: {
        height: '13vh'
    }

}));


const DataCard = () => {
    const classes = useStyles();

    return (
        <Paper>
            <Card className={classes.root}>
                <CardHeader title="data-card-header" component={() => <DataCardHeader/>}>

                </CardHeader>
                <Divider />
                <CardContent style={{ backgroundColor: '252c36' }}>
                    <Grid container xs={12} className={classes.gridContent}>
                        <Grid item xs={12} id="card-top-section">
                            <TopCard />
                        </Grid>
                        <Grid item xs={12} id="card-bottom-section">
                            <TextFieldSection />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Paper>

    );

};

export default DataCard;
