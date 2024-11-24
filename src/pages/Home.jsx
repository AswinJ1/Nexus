import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Vid  from "../components/Vid";
import FAQ from "../components/FAQ";

const Home = () => {
  const [playState, setPlaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About setPlaystate={setPlaystate} />
      </div>
      <div id="vid">
        <Vid playState={playState} setPlaystate={setPlaystate} />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
