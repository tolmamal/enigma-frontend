import React from 'react';
import { Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import './App.css';
import ReactVirtualizedTable from './containers/FilteredTable/FilteredTable';
import DataCard from './containers/DataCard/DataCard';
import FullWidthTabs from './containers/Logger/Logger';
import DataChart from './containers/DataChart/DataChart';
import DataDisplayTable from './containers/DataDiaplayTable/DataDisplayTable';


const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em',

        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#626a77',
            outline: '1px solid slategrey',
        }
    },
    root: {
        marginLeft: 10
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));


const App = () => {
    const classes = useStyles();

    return (
        <Grid container xs={12} className="App">
            <Grid container id="main-grid" spacing={1} xs={12}>
                <Grid container id="top" spacing={1} xs={12}>
                    <Grid item id="top-left" xs={8} spacing={3}>
                        <Grid container id="top-top" spacing={1} xs={12}>
                            <Grid item xs={6}>
                                <ReactVirtualizedTable />
                            </Grid>
                            <Grid item xs={6}>
                                <ReactVirtualizedTable />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} id="top-bottom" spacing={1}>
                            <Grid item xs={8}>
                                <Grid item xs={12} id="data-table">
                                    <DataDisplayTable />
                                </Grid>
                            </Grid>
                            <Grid container item xs={4} spacing={1} style={{height: "0%"}}>
                                <Grid item xs={12} id="card-top">
                                    <DataCard />
                                </Grid>
                                <Grid item xs={12} id="card-bottom">
                                    <DataCard />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container id="top-right" xs={4} spacing={2} style={{height: "0%"}}>
                        {
                            [...Array(5)].map((_, index) =>
                                <Grid item key={index} xs={6}>
                                    <DataChart/>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid container item xs={12} id="bottom" spacing={2}>
                    <Grid item xs={6} id="logger1">
                        <FullWidthTabs/>
                    </Grid>
                    <Grid item xs={6} id="logger2">
                        <FullWidthTabs/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

};

export default App;
