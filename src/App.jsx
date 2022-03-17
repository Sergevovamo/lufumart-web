import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ElectronicsList from "./pages/ElectronicsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import Flashsales from "./pages/Flashsales";
import Sellers from "./pages/Sellers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const App = () => {

  const user = true

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        {/* <Route path = "/login" element= {user ? <Navigate replace to="/" />: <Login/>}/>
        <Route path = "/register" element={user ? <Navigate replace to="/" />: <Register/>}/> */}
        <Route path = "/login" element= {<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/products/:category" element={<ProductList/>}/>
        <Route path = "/electronics" element={<ElectronicsList/>}/>
        <Route path = "/categories" element={<Categories/>}/>
        <Route path = "/wishlist" element={<Wishlist/>}/>
        <Route path = "/flashsales" element={<Flashsales/>}/>
        <Route path = "/sellers" element={<Sellers/>}/>
        <Route path = "/terms" element={<Terms/>}/>
        <Route path = "/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path = "*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;