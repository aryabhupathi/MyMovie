import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>

      <Route exact path="/starred" element={<Starred />}></Route>

      <Route exact path="/show/:id" element={<Show />}></Route>

      <Route>Not found</Route>
    </Routes>
  );
}

export default App;
