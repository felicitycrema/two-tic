import React from 'react';
// import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Game from "./Pages/Game/Game";
import Header from "./components/Header/Header";
// import { ModalContext } from "./context/ModalContext";

function Router(){
  // const { handleModal } = useContext(ModalContext);

  return (
    <BrowserRouter> 
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/game-on" element={<Game />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
