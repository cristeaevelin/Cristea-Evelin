"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export function Card({ className = "", children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;
    x.set(offsetX);
    y.set(offsetY);
  }

  return (
    <div
      className="perspective-1000 cursor-target"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
    >
      <motion.div
  ref={cardRef}
  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
  className={`rounded-2xl bg-radial-custom border border-white/30 p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
>
  {children}
</motion.div>

    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
