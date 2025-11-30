import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
// technologyIcons.js
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiStripe,
  SiExpress,
  SiNodedotjs
} from "react-icons/si";

const techIcons = {
  "React": <SiReact className="w-6 h-6 text-[#61dafb]" />,
  "Tailwindcss": <SiTailwindcss className="w-6 h-6 text-[#38bdf8]" />,
  "Framer-motion": <SiFramer className="w-6 h-6 text-white" />,
  "Framer Motion": <SiFramer className="w-6 h-6 text-white" />,
  "GSAP": <SiGreensock className="w-6 h-6 text-[#8dd100]" />,
  "Stripe": <SiStripe className="w-6 h-6 text-[#6772e5]" />,
  "Express": <SiExpress className="w-6 h-6 text-white" />,
  "Node": <SiNodedotjs className="w-6 h-6 text-[#66cc33]" />,
  "Node.js": <SiNodedotjs className="w-6 h-6 text-[#66cc33]" />,
};


export default function ProjectShowcaseModal({ project, onClose }) {
  if (!project) return null;
  const fontRef = useRef(null)
  const colorRef = useRef(null)
  const techRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      fontRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.4, delay: 0.4, ease: "power3.out", }
    );

    gsap.fromTo(
      colorRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, delay: 0.7, ease: "power3.out", }
    );

        gsap.fromTo(
      techRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.4, delay: 1.0, ease: "power3.out", }
    );
  }, []);


  const [activeIndex, setActiveIndex] = useState(0);

  const active = project.images[activeIndex];
  const activeImage = active?.src;
  const activeTitle = active?.title;
  const activeDescription = active?.description;

  const layoutId = `project-card-${project.id}`;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main Modal Container */}
          <motion.div
            layoutId={layoutId}
            className="
              relative w-[90vw] h-[90vh] rounded-2xl overflow-hidden flex
              bg-radial-custom border border-white/30 shadow-2xl backdrop-blur-xl
              pointer-events-auto cursor-target
            "
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/60 text-3xl hover:text-white transition"
            >
              ×
            </button>

            {/* LEFT SIDE – Image Showcase */}
            <div className="w-[60%] h-full bg-black/20 flex flex-col justify-center p-4 gap-4">

              {/* TITLE ABOVE IMAGE */}
              <h3 className="text-white/90 text-4xl font-druk tracking-[0.02em] text-center mb-1">
                {activeTitle}
              </h3>

              {/* BIG IMAGE */}
              <div className="flex items-center justify-center rounded-xl bg-black/20 overflow-hidden h-[35%]">
    <motion.img
      loading="eager"
      decoding="async"
      fetchpriority="high"
      key={activeImage}
      src={activeImage}
      alt={project.title}
      className="object-contain h-full text-6xl max-w-full rounded-xl"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
    />
  </div>

              {/* DESCRIPTION UNDER IMAGE */}
              <p className="text-white/60 text-lg font-comic text-center my-6">
                {activeDescription}
              </p>

              {/* CAROUSEL */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/40 text-xs">
                    {activeIndex + 1} / {project.images.length}
                  </p>
                </div>

                <div className="relative flex items-center gap-2">

                  {/* Left arrow */}
                  <button
                    onClick={handlePrev}
                    className="shrink-0 w-8 h-8 rounded-full border border-white/20 text-white/70 text-lg flex items-center justify-center hover:bg-white/10 transition"
                  >
                    ‹
                  </button>

                  {/* Thumbnails */}
                  <div className="flex-1 overflow-hidden">
                    <div className="flex gap-3">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          className={`relative h-20 flex-1 min-w-[80px] rounded-lg overflow-hidden border transition 
                            ${
                              idx === activeIndex
                                ? "border-white/80 shadow-md"
                                : "border-white/10 opacity-80 hover:opacity-100"
                            }`}
                        >
                          <img
                            loading="lazy"
                            src={img.src}
                            alt={img.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right arrow */}
                  <button
                    onClick={handleNext}
                    className="shrink-0 w-8 h-8 rounded-full border border-white/20 text-white/70 text-lg flex items-center justify-center hover:bg-white/10 transition"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – Project Details */}
            <div className="w-[40%] h-full p-6 flex flex-col overflow-y-auto gap-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">

              {/* Title + Description */}
              <div>
                <h2 className="text-4xl font-dope text-white/90 mb-1">
                  {project.title}
                </h2>
                <p className="text-white/60 text-base font-comic">
                  {project.description}
                </p>
              </div>

<div className="flex flex-col justify-center mt-12">
              {/* Fonts */}
              {project.fonts && (
                <div ref={fontRef}>
                  <h3 className="text-2xl font-druk tracking-[0.02em] text-white/65 mb-2">
                    Fonts used
                  </h3>
                  <div className="space-y-3">
                    {project.fonts.split(",").map((font, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <p className="text-md text-white/80 font-comic tracking-[0]">
                          {font.trim()}
                        </p>
                        <div
                          style={{ fontFamily: font.trim() }}
                          className="text-white/90 text-lg bg-white/5 rounded-md px-3 py-2"
                        >
                          Aa Bb Cc – {font.trim()} in action
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {project.colors && (
                <div ref={colorRef} className="mt-8">
                  <h3 className="text-2xl font-druk tracking-[0.02em] text-white/65 mb-2">
                    Color palette
                  </h3>
                  <div className="flex flex-col gap-3">
                    {project.colors.split(",").map((col, idx) => (
                      <div key={idx} className="flex items-center text-md text-white/40 font-comic gap-3">
                        <div
                          className="w-8 h-8 rounded-full border border-white/10 shadow-md"
                          style={{ backgroundColor: col.trim() }}
                        />
                        <span className="text-sm text-white/80">
                          {col.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
  <div ref={techRef} className="mt-8">
    <h3 className="text-2xl font-druk tracking-[0.02em] text-white/65 mb-2">
      Technologies
    </h3>

    <div className="flex items-center gap-3 flex-wrap">
      {project.technologies
        .split(",")
        .map(t => t.trim())
        .map((tech, idx) => (
          <div key={idx} className="flex items-center gap-1">
            {techIcons[tech] ? (
              techIcons[tech]
            ) : (
              <span className="text-white/50 text-xs">{tech}</span>
            )}
          </div>
      ))}
    </div>
  </div>
)}
</div>

              {/* Live link */}
              {project.link && (
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center py-3 rounded-lg bg-white/10 text-white/90 font-dope text-2xl tracking-wide hover:bg-white/20 transition"
                  >
                    Visit live website →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
