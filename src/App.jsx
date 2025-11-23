"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MobileBlocker from "./components/MobileBlocker";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(() => {
    const sections = gsap.utils.toArray("section[id]");
  
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          const id = section.getAttribute("id");
          window.history.replaceState(null, "", `${id}`);
        },
        onEnterBack: () => {
          const id = section.getAttribute("id");
          window.history.replaceState(null, "", `${id}`);
        },
      });
    });
  }, []);
  
  return (
    <div className="bg-[#1f1d1c] w-screen overflow-x-hidden"> 
        <MobileBlocker />
      <main className="relative z-0">
    <section id="home-section">
      <Home />
    </section>
    <section id="about-section">
      <About />
    </section>

  <section id="services">
    <Services />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="contact">
    <Contact />
  </section>
</main>

    </div>
  );
}
