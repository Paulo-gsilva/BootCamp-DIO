import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import { Container } from '@material-ui/core/';
import Header from './Components/Header';

export default function App() {
  //forçando a renderização do header com <Header/>
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Header />
        <MainRoutes />
      </BrowserRouter>
    </Container>
  );
}

