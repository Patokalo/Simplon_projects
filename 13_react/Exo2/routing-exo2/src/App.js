import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import APropos from "./APropos";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
