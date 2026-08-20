import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { QuoteProvider } from "./context/QuoteContext";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { SuppliersPage } from "./pages/SuppliersPage";
import { ContactPage } from "./pages/ContactPage";
import { QuotePage } from "./pages/QuotePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <QuoteProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categorySlug" element={<CategoryPage />} />
            <Route
              path="/products/:categorySlug/:subSlug"
              element={<CategoryPage />}
            />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </QuoteProvider>
  );
}