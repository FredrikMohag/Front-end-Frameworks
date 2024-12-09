import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header högst upp */}
      <Header />

      {/* Innehållsdel */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer längst ner */}
      <Footer />
    </div>
  );
}
