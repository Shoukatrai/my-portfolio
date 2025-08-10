import React from "react";
import { About, Contact, Footer, Hero, Navbar, Projects, Services, Skills } from "../components";

const Home = () => {
  return (
    <div className=" font-poppins bg-gradient-to-b from-[#EEF2FF] to-[#E0F7FA]">
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Skills />

      <Projects />





      <Contact />



      <Footer />
    </div>
  );
};

export default Home;
