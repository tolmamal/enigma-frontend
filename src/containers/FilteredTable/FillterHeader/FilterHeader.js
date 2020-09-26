import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, CardHeader, Grid, TextField, FilledInput, Toolbar, Typography} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    inputRoot: {
        color: "white",
        borderColor: "white",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        backgroundColor: 'transparent'
    },
    autocomplete: {
        padding: 0,
        width: "150px"
    },
    textField: {},
    textFieldInput: {
        color: 'white',
        border: '1px solid white'
    }
}));

const filterOptions = [
    {name: 'Filter 1'},
    {name: 'Filter 2'},
    {name: 'Filter 3'},
    {name: 'Filter 4'},
    {name: 'Filter 5'},
];

const FilterHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#2f3b4b'}}>
                <Toolbar variant="dense" style={{padding: "0 10px"}}>
                    <Grid container alignItems="center" spacing={1} xs={12} style={{padding: "3px 0"}}>
                        <Grid item xs={3} alignItems="center" style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <Typography variant="subtitle2">
                                FILTERS APPLIED:
                            </Typography>
                        </Grid>
                        {
                            [...Array(3)].map((_, index) => (
                                <Grid item xs={3} key={`autocomplete-filter-${index}`}>
                                    <Autocomplete
                                        id={`autocomplete-filter-${index}`}
                                        freeSolo
                                        options={filterOptions.map((option) => option.name)}
                                        onChange={(e, selection) => console.log({index, selection})}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                color="primary"
                                                placeholder="Filter"
                                                margin="dense"
                                                variant="outlined"
                                                size="small"
                                            />
                                        )}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default FilterHeader;
