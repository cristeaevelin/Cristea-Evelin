"use client";
import React, { useEffect, useRef } from "react";
import Particles from "../components/Particles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);
  const card6 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
        },
      });

    tl.to(
      titleRef.current,
      {
        top: "35%",   // SUB cardul 3 în scena 1
        scale: 1.0,
        duration: 1,
        ease: "power3.out",
      },
      0 // începe imediat după ce intră cardul 3
    );

      // SCENA 1 — cardurile 1, 2, 3 intră
      tl.fromTo(
        card1.current,
        { autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0, duration: 1 },
        0.3
      );

      tl.fromTo(
        card2.current,
        { autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0, duration: 1 },
        0.6
      );

      tl.fromTo(
        card3.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.2 },
        0.9
      );

      // SCENA 2 — cardul 1 și 2 dispar, cardul 3 urcă în centru
      tl.to(card1.current, { autoAlpha: 0, y: -50, duration: 0.8 }, 2);
      tl.to(card2.current, { autoAlpha: 0, y: -50, duration: 0.8 }, 2);

      tl.to(
        card3.current,
        {
          top: "10%",
          duration: 1,
          ease: "power3.out",
        },
        2.5
      );

      // SCENA 3 — cardurile 4 și 5 apar sub card 3
      tl.fromTo(
        card4.current,
        { autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0, duration: 1 },
        3.5
      );

      tl.fromTo(
        card5.current,
        { autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0, duration: 1 },
        3.8
      );

      // SCENA 4 — cardul 3 iese, 4 și 5 urcă, apare card 6
      tl.to(
        card3.current,
        { autoAlpha: 0, y: -80, duration: 1 },
        5
      );

      tl.to(
        card4.current,
        { top: "10%", duration: 1 },
        5.3
      );

      tl.to(
        card5.current,
        { top: "10%", duration: 1 },
        5.3
      );

      tl.fromTo(
        card6.current,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1.2 },
        5.7
      );

      /* --------------------------
   SCENA 5 — IESIRE CINEMATICĂ
   4 & 5 -> apoi titlu -> apoi card 6
   -------------------------- */
// 4 și 5 ies primele
tl.to(
  card4.current,
  { autoAlpha: 0, y: -80, duration: 0.8, ease: "power2.inOut" },
  7
);

tl.to(
  card5.current,
  { autoAlpha: 0, y: -80, duration: 0.8, ease: "power2.inOut" },
  7
);

// apoi titlul
tl.to(
  titleRef.current,
  { autoAlpha: 0, y: -50, duration: 0.9, ease: "power2.inOut" },
  7.4
);

// cardul 6 iese ultimul
tl.to(
  card6.current,
  { autoAlpha: 0, y: -80, duration: 1, ease: "power2.inOut" },
  7.8
);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ANIMAȚIA PINUITĂ */}
      <div
        ref={containerRef}
        className="relative min-h-screen w-full bg-[#1f1d1c] overflow-hidden"
      >
            <div
      ref={titleRef}
      className="absolute w-full text-center"
      style={{
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <h1 className="text-white/40 font-bold text-[260px] font-dope tracking-[2px]">
        Services
      </h1>
    </div>

        <Particles />

        {/* CARD 1 — sus stânga */}
        <div
          ref={card1}
          className="absolute w-[380px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "10%", left: "10%", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">Product Ads</h2>
          <p className="text-white/70 text-lg font-comic">
          Creating advertising images and concepts that highlight your product,
           whether for social media or print.
          </p>
        </div>

        {/* CARD 2 — sus dreapta */}
        <div
          ref={card2}
          className="absolute w-[380px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "10%", right: "10%", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">Web Design & Development</h2>
          <p className="text-white/70 text-lg font-comic">
          Building modern, responsive, and performance-optimized websites, 
          with a strong focus on UX/UI and visual identity.
          </p>
        </div>

        {/* CARD 3 — centrat */}
        <div
          ref={card3}
          className="absolute w-[420px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "70%", left: "50%", transform: "translateX(-50%)", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">Graphic Design</h2>
          <p className="text-white/70 text-lg font-comic">
          Posters, flyers, printed or digital layouts – all crafted with attention to detail and visual impact.
          </p>
        </div>

        {/* CARD 4 — sub card 3, stânga */}
        <div
          ref={card4}
          className="absolute w-[380px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "65%", left: "10%", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">3D Advertising</h2>
          <p className="text-white/70 text-lg font-comic">
          Using Blender, we create stunning, realistic 3D graphics that turn your products into visual showstoppers.
          </p>
        </div>

        {/* CARD 5 — sub card 3, dreapta */}
        <div
          ref={card5}
          className="absolute w-[380px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "65%", right: "10%", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">Visual Identity</h2>
          <p className="text-white/70 text-lg font-comic">
          From unique logos to color palettes and brand guidelines — helping you build a brand that people remember.
          </p>
        </div>

        {/* CARD 6 — centru jos */}
        <div
          ref={card6}
          className="absolute w-[420px] h-52 p-4 rounded-[40px] bg-radial-custom border border-white/30"
          style={{ top: "70%", left: "50%", transform: "translateX(-50%)", opacity: 0 }}
        >
          <h2 className="text-white text-3xl font-druk">Creative Consultance</h2>
          <p className="text-white/70 text-lg font-comic">
          Got an idea but don’t know where to start? 
          You will be guided step-by-step through the visual and technical development of your brand.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
