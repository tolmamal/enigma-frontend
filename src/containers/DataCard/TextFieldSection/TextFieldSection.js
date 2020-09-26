import React from 'react';
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));


const TextFieldSection = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    defaultValue="1.25"
                    variant="outlined"
                    margin="dense"
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    defaultValue="MKT"
                    variant="outlined"
                    margin="dense"
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    defaultValue="Slippage"
                    variant="outlined"
                    margin="dense"
                    size="small"
                />
            </Grid>
        </Grid>
    );

};

export default TextFieldSection;
