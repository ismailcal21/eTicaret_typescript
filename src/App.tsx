import React from "react";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./pages/home-page";
import Login from "./login";
import Register from "./pages/home-page/register";
import Cart from "./pages/cart";
import ProductsPage from "./pages/home-page/ProductsPage";

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
          <Route path="products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
