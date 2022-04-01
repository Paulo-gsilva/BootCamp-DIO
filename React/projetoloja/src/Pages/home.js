import React from "react";
import { useSelector } from "react-redux"; //conecta o estado ao componente
import { Grid, Typography, Paper, List, makeStyles } from '@material-ui/core/';
import Item from "../Components/Item";
import Camisas from "../Components/Camisa";
import productList from "../Components/store/reducers/product";

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

const Home = () => {
    const products = useSelector(state => state.products);
    const classes = useStyles();

    const categorys = productList.map(
        item => {
            const container = {};
            container['id'] = item.id_category;
            container['name'] = item.name_category;
            return container; //coloca todos os produtos dentro de um objeto CATEGORY apenas com id e nome
        }
    )

    const categoryItem = categorys.map(JSON.stringify) //converte o objeto CATEGORYS em string para filtrar itens repetidos
        .filter((item, index, array) => {
            return array.indexOf(item, index + 1) === -1 //-1 aprova exclusão
        })
        .map(JSON.parse);


    const quantityCategory = categorys.map(categoryName => categoryName.name);
    let count = {};
    for (let i = 0; i < quantityCategory.length; i++) {
        let key = quantityCategory[i];
        count[key] = (count[key] ? count[key] + 1 : 1); //comapra cada nome e sua quantidade
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        {categoryItem.map(
                            item => {
                                return (
                                    <Item
                                        key={item.id}
                                        ItemName={item.name}
                                        ItemQuantity={count[item.name]}
                                    />
                                );
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                {productList.map(item => {
                    return (
                        <Camisas key={item.id_product} name={item.name_product} price={item.price}>{item.name_product}</Camisas>
                    )
                })}
            </Grid>
        </Grid>
    );
}

export default Home; //conectando o estado a home