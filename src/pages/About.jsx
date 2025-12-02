import TrueFocus from "../components/TrueFocus.jsx";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function About() {
  const pRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="h-screen z-50 w-screen flex flex-col items-center border-b border-white/40 justify-center bg-[#1f1d1c]">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
      <TrueFocus
        sentence="About me"
        manualMode={false}
        blurAmount={5}
        borderColor="#7D66FC"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <div className="space-y-10 text-2xl mx-20 text-[#FFFFFFCC] font-comic">
        <p ref={pRef}>
          My journey started with a fascination for the intersection of art and
          technology. Today, I specialize in crafting immersive digital
          experiences that not only look stunning but also provide exceptional
          user experiences.
        </p>

        <p ref={pRef}>
          When I'm not coding or designing, you'll find me exploring the latest
          design trends, experimenting with new technologies, or contributing to
          open-source projects.
        </p>
      </div>
    </div>
  );
};