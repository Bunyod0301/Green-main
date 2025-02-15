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
import AgroNurellCard from "./components/cards/Card1";
import PlantProtection from "./pages/products/plant-protection/PlantProtection";
import PlantProtectionView from "./pages/products/plant-protection/view/PlantProtectionView";
import { useTranslation } from "react-i18next";
import PlantNutrition from "./pages/products/plant-nutrition/PlantNutrition";
import PlantNutritionView from "./pages/products/plant-nutrition/view/PlantNutritionView";
import PlantNutritionNpk from "./pages/products/plant-nutrition/view/NpkView";
function App() {
  const containerRef = useRef(null);

  const { t, i18n } = useTranslation();
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
          <Route path="plant-protection/view/:id" element={<PlantProtectionView />} />
          <Route path="plant-protection" element={<PlantProtection />} />
          <Route path="plant-nutrition" element={<PlantNutrition />} />
          <Route path="plant-nutrition/view/:id" element={<PlantNutritionView />} />
          <Route path="plant-nutrition/npk/:id" element={<PlantNutritionNpk />} />
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
