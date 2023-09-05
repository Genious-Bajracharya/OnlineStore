import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Land from "./components/land";
import Product_detail from "./components/Product_detail";
import Search from "./components/search";
import Login from "./components/login";
import Add from "./components/AddtoCart";
import Category from "./components/Category";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element=<Land /> />
        <Route exact path="/product/:id" element={<Product_detail />} />
        <Route exact path="/search/:query" element={<Search />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
