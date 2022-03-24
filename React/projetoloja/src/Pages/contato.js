import React from "react";
import { Grid, Button, TextField } from '@material-ui/core/';

export default function Contatos() {
    return (
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth />
                <TextField id="message" label="Message" fullWidth />
            </Grid>
            <Button variant="contained" color="primary">
                Enviar
            </Button>
        </>
    );
}