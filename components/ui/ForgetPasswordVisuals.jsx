"use client";

import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";

export default function ForgotPasswordVisual() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-200/40
          blur-3xl
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner Orbit */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-82.5
          w-82.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-violet-200
        "
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Stars */}
      <FloatingStar className="left-[25%] top-[25%]" delay={0} duration={3} />

      <FloatingStar
        className="right-[25%] top-[30%]"
        delay={0.8}
        duration={4}
      />

      <FloatingStar
        className="left-[27%] bottom-[25%]"
        delay={1.2}
        duration={3.5}
      />

      <FloatingStar
        className="right-[27%] bottom-[25%]"
        delay={1.8}
        duration={4.2}
      />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Lock */}
        <motion.div
          className="
            flex
            h-45
            w-45
            items-center
            justify-center
            rounded-[40px]
            bg-linear-to-br
            from-violet-400
            via-violet-500
            to-purple-700
            shadow-2xl
            shadow-violet-500/30
          "
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: {
              duration: 0.6,
              ease: "easeOut",
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <LockKeyhole size={65} strokeWidth={1.5} className="text-white" />
        </motion.div>

        {/* Text */}
        <motion.div
          className="mt-12 w-full max-w-130 px-6 text-center"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Your security is our priority
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Your account deserves protection. We'll help you get back into your
            workspace securely.
          </p>
        </motion.div>

        {/* Indicators */}
        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <span className="h-2.5 w-7 rounded-full bg-violet-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-200" />
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   FLOATING STAR
===================================================== */

function FloatingStar({ className = "", delay = 0, duration = 3 }) {
  return (
    <motion.div
      className={`absolute text-xl ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 12, 0],
        opacity: [0.4, 1, 0.4],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ✦
    </motion.div>
  );
}
