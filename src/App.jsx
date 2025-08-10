import React from "react";
import Navbar from "./components/Navbar";
import { Route,  Routes } from "react-router-dom";
import { About, Contact, Home, Projects, Skills } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
