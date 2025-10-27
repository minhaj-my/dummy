"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {" "}
        Welcome to <span className="text-blue-400">Dialog</span>🗨️
      </motion.h1>

      <motion.p
        className="text-lg text-black max-w-xl mx-auto mb-10 font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The future of communication -Powered by AI. Chat smarter ,connect faster
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#FFC0CB" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="px-6 py-3 bg-blue-200 text-black rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all mx-auto block"
      >
        Get Started
      </motion.button>
    </main>
  );
}
