import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/product-list" element={<ProductList/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/categories" element={<Categories/>}/>
        <Route path = "/wishlist" element={<Wishlist/>}/>
        <Route path = "*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;