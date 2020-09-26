import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextFieldSection from './TextFieldSection/TextFieldSection';
import TopCard from './TopCard/TopCard';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Paper,
    Grid,
} from "@material-ui/core";
import { SwapHoriz, Telegram } from "@material-ui/icons";
import ReactVirtualizedTable from "../FilteredTable/FilteredTable";
import DataCardHeader from '../../containers/DataCard/DataCardHeader/DataCardHeader';


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
            <Card className={classes.root} style={{ backgroundColor: '#252c36' }}>
                <CardHeader title="data-card-header" component={() => <DataCardHeader/>}>

                </CardHeader>
                <Divider />
                <CardContent>
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

    return (
        <Paper>
            <Card className={classes.root} style={{ backgroundColor: '#252c36' }}>
                <CardHeader title="data-card-header" component={() => <DataCardHeader/>}>

                </CardHeader>
                <Divider />
                <CardContent>
                    <div id="card-top-section">
                        <TopCard />
                    </div>
                    <div id="card-bottom-section">
                        <TextFieldSection />
                    </div>
                </CardContent>

            </Card>
        </Paper>
    );

};

export default DataCard;
