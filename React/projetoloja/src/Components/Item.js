import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';

//todos os componentes possuem props que são propriedades que podem ser recebidas
export default function Item(props) {
    //pode ser feito com desestruturação
    //export default function Item({name, quantity}) {
    return (
        <ListItem>
            <ListItemText
                primary={props.ItemName}
                secondary={props.ItemQuantity}
            />
        </ListItem>
    );
}