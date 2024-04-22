/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";
const App = () => {
  const [productCount, setProductCount] = useState({});

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productCount={productCount}
              setProductCount={setProductCount}
            />
          }
        />
        <Route path="/cart" element={<Cart productCount={productCount} />} />
      </Routes>
      App
    </div>
  );
};

export default App;
