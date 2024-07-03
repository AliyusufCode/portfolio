import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={!openMenu ? "container" : "container-overlay"}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
