import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/store";
import MainRoutes from "./routes";
import { Container } from '@material-ui/core/';
import Header from './Components/Header';

export default function App() {
  //forçando a renderização do header com <Header/>
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <BrowserRouter>
          <Header />
          <MainRoutes />
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

