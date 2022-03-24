import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import Header from './Components/Header';

export default function App() {
  //forçando a renderização do header com <Header/>
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
    </BrowserRouter>

  );
}

