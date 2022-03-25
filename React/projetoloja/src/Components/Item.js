import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';

export default function Item() {
    return (
        <ListItem>
            <ListItemText
                primary="Times nacionais"
                secondary="3"
            />
        </ListItem>
    );
}