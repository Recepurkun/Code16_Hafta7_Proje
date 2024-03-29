import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
