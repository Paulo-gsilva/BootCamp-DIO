import React from 'react';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));


export default function Camisas({name, price, children}) {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography variant='h6'>
                            {children}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {price}
                        </Typography>
                    </Grid>
                    <Button variant="contained">Adicionar</Button>
                </Grid>
            </Paper>
        </Grid>
    );
}