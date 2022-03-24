import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/home";
import Contatos from './Pages/contato';


export default function MainRoutes() {
    return (
        <Routes>
            <Route
                path="/" //rota mãe
                element={<Home />}
            />
            <Route
                path="contato"
                element={<Contatos />}
            />

        </Routes>
    );
}