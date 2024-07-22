import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Neverland } from "./pages/Neverland/Neverland";
import { Mistake } from "./pages/Mistake/Mistake";
import { NotFound } from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/neverland" element={<Neverland />} />
          <Route path="/mistake" element={<Mistake />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
