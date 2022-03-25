import React from "react";
import Item from "../Components/Item";
import Camisas from "../Components/Camisa";
import { Grid, Typography, Paper, List, makeStyles } from '@material-ui/core/';

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
                        <Item
                            ItemName="Camisas Nacionais"
                            ItemQuantity="5"
                        />
                        <Item
                            ItemName="Camisas Internacionais"
                            ItemQuantity="3"
                        />
                        <Item
                            ItemName="Camisas Históricas"
                            ItemQuantity="2"
                        />
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                <Camisas name="Flamengo 2020" price="25.00" image="../../public/images/super.jpg">Flamengo</Camisas>
                <Camisas name="Ponte Preta 2020" price="25.00" image="../../public/images/super.jpg">Ponte Preta</Camisas>
                <Camisas name="Corinthians 2020" price="25.00" image="../../public/images/super.jpg">Corinthians</Camisas>
                <Camisas name="Ceará 2020" price="25.00" image="../../public/images/super.jpg">Ceará</Camisas>
                <Camisas name="São Paulo 2020" price="25.00" image="../../public/images/super.jpg">São Paulo</Camisas>
                <Camisas name="Cruzeiro 2020" price="25.00" image="../../public/images/super.jpg">Cruzeiro</Camisas>
                <Camisas name="Internacional 2020" price="25.00" image="../../public/images/super.jpg">Internacional</Camisas>
                <Camisas name="Grêmio 2020" price="25.00" image="../../public/images/super.jpg">Grêmio</Camisas>
            </Grid>
        </Grid>
    );
}