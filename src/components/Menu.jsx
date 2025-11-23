import React from 'react'
import { motion } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export default function index({menuIsActive}) {
  return (
    <motion.div 
    className="fixed flex flex-col items-center justify-center h-[90vh] w-full z-40 text-2xl font-bold text-white"
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
    >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
    </motion.div>
  )
}