import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Products from "./components/products/Products";
import Main from "./components/layout/Main";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import Home from "./components/layout/Home";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        {/* <Route path="products" element={<Products />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="productsDetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
