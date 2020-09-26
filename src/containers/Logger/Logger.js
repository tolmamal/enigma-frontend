import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tab, Tabs, AppBar, Typography, Box, Paper } from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography style={{ textAlign: 'left' }} >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
        style: {minWidth: "unset", fontSize: "11px", padding: 0}
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary,
        width: '100%',
    },
    tabPanel: {
        overflowY: 'scroll',
        height: '200px',
        backgroundColor: '#252c36'
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Paper>
            <div className={classes.root}>
                <AppBar position="static" color="default" style={{ backgroundColor: '#2f3b4b' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="primary"
                        // textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="ID" {...a11yProps(0)} />
                        <Tab label="CREATED" {...a11yProps(1)} />
                        <Tab label="LAST OPENED" {...a11yProps(2)} />
                        <Tab label="INSTRUMENT" {...a11yProps(3)} />
                        <Tab label="QTY" {...a11yProps(4)} />
                        <Tab label="BID" {...a11yProps(5)} />
                        <Tab label="ASK" {...a11yProps(6)} />
                        <Tab label="DELTA" {...a11yProps(7)} />
                        <Tab label="MODEL VOL" {...a11yProps(8)} />
                        <Tab label="STATUS" {...a11yProps(9)} />
                        <Tab label="CLEARING" {...a11yProps(10)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews

                    animateTransitions={false}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel className={classes.tabPanel} value={value} index={0} dir={theme.direction} >
                        Item ID
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={1} dir={theme.direction}>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:34] production. WARNING: login failed. Wrong number of segments <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                        [2020-08-21 13:11:05] production. INFO: EUR_USD - imlied price: 1.1762 - message: inserted id: 1782721 <br/>
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={2} dir={theme.direction}>
                        Item LAST OPENED
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={3} dir={theme.direction}>
                        Item INSTRUMENT
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={4} dir={theme.direction}>
                        Item QTY
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={5} dir={theme.direction}>
                        Item BID
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={6} dir={theme.direction}>
                        Item ASK
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={7} dir={theme.direction}>
                        Item DELTA
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={8} dir={theme.direction}>
                        Item MODEL VOL
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={9} dir={theme.direction}>
                        Item STATUS
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={10} dir={theme.direction}>
                        Item CLEARING
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Paper>
    );
}

