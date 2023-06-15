/* eslint-disable no-unused-vars */
import React from "react";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Docs } from "./pages/Docs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
