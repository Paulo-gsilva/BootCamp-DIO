import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from '@material-ui/core/';
import Buy from "./Buy";

export default function Header() {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Loja Camisas
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Buy />
        </Grid>
    );
}