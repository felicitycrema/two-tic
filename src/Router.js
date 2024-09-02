import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Game from "./Pages/Game/Game";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
