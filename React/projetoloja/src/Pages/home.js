import React from "react";
import Item from "../Components/Item";
import { Grid, Button, Typography, Paper, List, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        <Item />
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid container direction='column'>
                            <Grid item>
                                <img width="140px" src="../../public/images/super.jpg" alt="Flamengo 2020" />
                                <Typography variant='h6'>
                                    Produto
                                </Typography>
                                <Typography variant='subtitle1'>
                                    R$ 99.00
                                </Typography>
                            </Grid>
                            <Button variant="contained">Adicionar</Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid container direction='column'>
                            <Grid item>
                                <img width="140px" src="../../public/images/super.jpg" alt="Flamengo 2020" />
                                <Typography variant='h6'>
                                    Produto
                                </Typography>
                                <Typography variant='subtitle1'>
                                    R$ 99.00
                                </Typography>
                            </Grid>
                            <Button variant="contained">Adicionar</Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid container direction='column'>
                            <Grid item>
                                <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020" />
                                <Typography variant='h6'>
                                    Produto
                                </Typography>
                                <Typography variant='subtitle1'>
                                    R$ 99.00
                                </Typography>
                            </Grid>
                            <Button variant="contained">Adicionar</Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid container direction='column'>
                            <Grid item>
                                <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020" />
                                <Typography variant='h6'>
                                    Produto
                                </Typography>
                                <Typography variant='subtitle1'>
                                    R$ 99.00
                                </Typography>
                            </Grid>
                            <Button variant="contained">Adicionar</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}