import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import SalePage from "./pages/SalePage"; // Importera SalePage
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout som wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sale" element={<SalePage />} />{" "}
          {/* Lägg till SalePage rutt */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
