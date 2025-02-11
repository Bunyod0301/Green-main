import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Catalog from "./components/pages/product/ProductCard";
import Magazine from "./components/magazine/Magazine";
import ProductDetails from "./components/pages/fullInformation/ProductDetails";
import Catalog2 from "./components/pages/product/ProductCard2";
import { useRef } from "react";
import Navbar2 from "./components/navbar/Navbar2";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import TabsWithRouter from "./pages/products/Products";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog2" element={<Catalog2 />} />
        <Route path="/products/*" element={<TabsWithRouter />}>
          <Route path="tab1" element={<div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">Tab 1 Content</h2>
            <p>This is the content for Tab 1.</p>
          </div>} />
          <Route path="tab2" element={<div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">Tab 2 Content</h2>
            <p>This is the content for Tab 2.</p>
          </div>} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/journal" element={<Magazine />} />

        <Route path="/details/:type/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
