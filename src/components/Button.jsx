import { motion } from "framer-motion";


export function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyle = "px-0 py-4 rounded-lg text-sm font-medium transition";
  const variants = {
    default: "text-4xl font-comic bg-cover underline",
    outline: "border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white"
  };

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
