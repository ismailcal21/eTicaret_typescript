import React from "react";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./pages/home-page";
import Login from "./login";
import Register from "./register";
import Cart from "./pages/cart";
import ProductsPage from "./pages/home-page/ProductsPage";
import ProductDetailsComponent from "./pages/home-page/ProductsPage/components";

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
          <Route
            path="productDetail/:product_id"
            element={<ProductDetailsComponent />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
