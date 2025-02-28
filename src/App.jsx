import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar2 from "./components/navbar/Navbar2";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import TabsWithRouter from "./pages/products/Products";
import PlantProtection from "./pages/products/plant-protection/PlantProtection";
import PlantProtectionView from "./pages/products/plant-protection/view/PlantProtectionView";
import PlantNutrition from "./pages/products/plant-nutrition/PlantNutrition";
import PlantNutritionView from "./pages/products/plant-nutrition/view/PlantNutritionView";
import PlantNutritionNpk from "./pages/products/plant-nutrition/view/NpkView";
import Catalog from "./pages/catalog/Catalog";
import Liflet from "./pages/liflet/Liflet";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
function App() {

  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/liflet" element={<Liflet />} />
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
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
