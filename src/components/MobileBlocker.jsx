import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // orice sub 900px blocăm
      if (w < 900 || h < 600) setIsMobile(true);
      else setIsMobile(false);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        fixed inset-0 z-[999999] flex items-center justify-center 
        bg-black text-white overflow-hidden
      "
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(255,0,100,0.2),transparent_60%)]
          blur-3xl 
        "
      />

      {/* Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-50 text-center px-10"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mb-6 opacity-80"
        >
          {/* desktop icon */}
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M4 4H20V16H4V4Z"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M10 20H14"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M8 16H16"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-4xl font-dope tracking-wide mb-3"
        >
          Open on Desktop
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white/60 font-comic text-lg leading-relaxed max-w-md mx-auto"
        >
          For the full immersive experience with 3D graphics and animations,
          please visit this website on a desktop device.
        </motion.p>

        {/* Pulsing glow circle */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="
            w-40 h-40 rounded-full bg-pink-500/10 
            mx-auto mt-10 blur-2xl
          "
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
