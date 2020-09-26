import React from 'react';
import { TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    // root: {
    //     margin: theme.spacing(1),
    //     width: '25ch',
    // },
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
                    // label="1.25"
                    defaultValue="1.25"
                    variant="outlined"
                    margin="dense"
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    // label="MKT"
                    defaultValue="MKT"
                    variant="outlined"
                    margin="dense"
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-basic"
                    // label="Slippage"
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
