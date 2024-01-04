import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Product from "./components/products/Product";
import Footer from "./components/footer/Footer";
import ProductCreate from "./components/productCreate/ProductCreate";
import ProductEdit from "./components/productEdit/ProductEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/create" element={<ProductCreate />} />
        <Route path="/edit" element={<ProductEdit />} />
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
