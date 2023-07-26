import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Land from "./components/land";
import Product_detail from "./components/Product_detail";
import Search from "./components/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element=<Land /> />
        <Route exact path="/product/:id" element={<Product_detail />} />
        <Route exact path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
