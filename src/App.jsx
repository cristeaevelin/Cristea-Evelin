"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MobileBlocker from "./components/MobileBlocker";
import BubbleMenu from "./components/BubbleMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");

    if (path) {
      const target = document.getElementById(path);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }, 30);
      }
    }
  }, []);

  useEffect(() => {
    let firstScroll = false;
  
    const sections = gsap.utils.toArray("section[id]");
  
    const triggers = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
  
        onEnter: () => {
          if (!firstScroll) return;
          const id = section.id;
          window.history.replaceState(
            null,
            "",
            id === "home" ? "/" : `/${id}`
          );
        },
  
        onEnterBack: () => {
          if (!firstScroll) return;
          const id = section.id;
          window.history.replaceState(
            null,
            "",
            id === "home" ? "/" : `/${id}`
          );          
        },

        immediateRender: false,
      })
    );

    ScrollTrigger.refresh(false);
  
    const activateUrlChange = () => {
      firstScroll = true;

      ScrollTrigger.refresh(true);
  
      window.removeEventListener("scroll", activateUrlChange);
    };
  
    window.addEventListener("scroll", activateUrlChange);
  
    return () => triggers.forEach((t) => t.kill());
  }, []);  
  
  return (
    <div className="bg-[#1f1d1c] w-screen overflow-x-hidden">  

    <BubbleMenu
      useFixedPosition={true}
    logo="/your-logo.png"
    menuBg="#FFFFFFCC"
    menuContentColor="#111111"
    items={[
      { label: "home", href: "/", rotation: -8, hoverStyles: { bgColor: "#6366f1", textColor: "#fff" }},
      { label: "about", href: "/about", rotation: 8, hoverStyles: { bgColor: "#a855f7", textColor: "#fff" }},
      { label: "services", href: "/services", rotation: 8, hoverStyles: { bgColor: "#6366f1", textColor: "#fff" }},
      { label: "projects", href: "/projects", rotation: 8, hoverStyles: { bgColor: "#a855f7", textColor: "#fff" }},
      { label: "contact", href: "/contact", rotation: -8, hoverStyles: { bgColor: "#6366f1", textColor: "#fff" }},
    ]}    
  />
        <MobileBlocker />
      <main className="relative z-0">
    <section id="home">
      <Home />
    </section>
    <section id="about">
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

<Footer />
    </div>
  );
}
