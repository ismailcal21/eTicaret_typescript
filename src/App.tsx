import React from "react";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./pages/home-page";
import Login from "./pages/home-page/login";
import Register from "./pages/home-page/register";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
