import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Neverland } from "./pages/Neverland/Neverland";
import { Mistake } from "./pages/Mistake/Mistake";
import { NotFound } from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer";
function App() {
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
