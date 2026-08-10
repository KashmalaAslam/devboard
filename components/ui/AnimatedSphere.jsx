"use client";

import { motion } from "framer-motion";

export default function AnimatedSphere() {
  return (
    <motion.div
      initial={{ y: 450, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* Top Half Circle */}
      <div className="w-48 h-24 overflow-hidden">
        <div className="w-48 h-48 rounded-full bg-linear-to-br from-violet-500 to-purple-700" />
      </div>

      {/* Divider Line */}
      <div className="relative z-10 w-48 h-px bg-white/80" />

      {/* Reflection */}
      <motion.div
        initial={{
          opacity: 0,
          scaleY: 0.4,
          y: -10,
        }}
        animate={{
          opacity: 1,
          scaleY: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-40"
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-48
            h-40
            bg-linear-to-b
            from-violet-500/35
            via-violet-400/20
            to-transparent
            blur-2xl
            scale-x-110
          "
        />
      </motion.div>
    </motion.div>
  );
}
