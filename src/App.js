import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./modules/layout/Header";
import Footer from "./modules/layout/Footer";
import Main from "./modules/main/Main";
import Contact from "./modules/main/Contact";
import About from "./modules/main/About";
import Home from "./modules/main/Home";
import ProductDetail from "./modules/products/ProductDetail";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <GlobalProvider>
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="productsDetail" element={<ProductDetail />} />
        </Routes>
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
