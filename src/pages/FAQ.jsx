"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";
import WavePlane from '../components/WavePlane';

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const questions = [
    {
      id: 1,
      title: "What is the typical timeline for completing a project?",
      details:
        "The duration of a project depends on its scope and complexity. Smaller projects, such as landing pages or basic branding, usually take between 2 and 4 weeks. Larger projects, like full website design and development, can take between 6 and 8 weeks or even longer. Once we discuss the details, I’ll be able to provide a more accurate estimate.",
    },
    {
      id: 2,
      title: "What are the typical costs associated with my project?",
      details:
        "Project costs are determined based on size and specific requirements. Branding projects start at $1500, while Webflow design and development typically range between $5000 and $12000. For a personalized estimate, let’s discuss your goals and needs.",
    },
    {
      id: 3,
      title: "Do you offer ongoing support or maintenance after the project is completed?",
      details:
        "Yes — I provide ongoing support to ensure your brand or website continues to perform smoothly. This can include updates, small improvements, bug fixes, design adjustments, or Webflow maintenance. Depending on your needs, we can set up either a monthly maintenance plan or on-demand support.",
    },
    {
      id: 4,
      title: "Can you describe the step-by-step process from start to finish?",
      details:
        "Every project begins with a discovery phase, where I learn about your objectives, target audience, and vision. Then I create initial concepts and refine them based on your feedback. If the project includes Webflow development, I turn the designs into a functional, responsive website. The final stage includes testing, any necessary revisions, and delivering the completed project ready for launch.",
    },
    {
      id: 5,
      title: "What do you need from me before we start the project?",
      details:
        "To begin, I typically need information about your goals, brand vision, preferred style, and any existing content such as logos, images, or copy. If you don’t have these materials yet, that’s completely fine — I can guide you through the entire process and help define the visual direction together. Once everything is aligned, we set the timeline and start the project.",
    },
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#1f1d1c] relative flex flex-col justify-center items-center w-full h-screen">
      <Canvas
      className="z-20 h-1/2 w-full pointer-events-none" 
        camera={{ fov: 60, position: [0, 0, 5], far: 20, near: 0.001 }}
        gl={{
          alpha: false,
          antialias: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#1f1d1c', 0); 
        }}
      >
        <group rotation={[Math.PI, 0, 0]}>
    <WavePlane />
  </group>
      </Canvas>
<div className="absolute mt-32 space-y-4 p-4"> 
<div className="text-8xl font-bold text-center text-white/40 font-dope tracking-3 -translate-y-1/2 z-10">
    <h1>Frequently Asked Questions</h1>
  </div>
      {questions.map((question, index) => (
        <motion.div
          key={question.id}
          variants={fadeIn("up", index * 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-radial-custom border border-white/30 p-6 gap-24 rounded-2xl shadow-lg backdrop-blur-sm cursor-pointer z-20"
          onClick={() => toggleQuestion(question.id)}
        >
          <h2 className="text-3xl text-white/50 tracking-[2px] px-24 font-dope">{question.title}</h2>
          {activeQuestion === question.id && (
            <div className="mt-4 space-y-2">
              <p className="text-white/40 text-lg px-24 leading-[1.5] font-extralight tracking-[2px] font-georama">{question.details}</p>
            </div>
          )}
        </motion.div>
      ))}
      </div> 
    </div>
  );
};

export default FAQ