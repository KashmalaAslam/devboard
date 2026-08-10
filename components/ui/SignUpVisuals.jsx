"use client";
import { motion } from "framer-motion";

export default function SignUpVisuals() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-slate-50 lg:flex ">
      {/* Background glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-105 w-105
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-violet-200/40 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeIn",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-center p-6">
        {/* Heading */}
        <motion.div
          className="mb-12 max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Everything in one place
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950">
            Turn your ideas into
            <span className="block text-violet-600">organized projects.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Plan projects, manage tasks, collaborate with your team, and track
            progress from one beautiful workspace.
          </p>
        </motion.div>

        {/* Dashboard area */}
        <div className="relative h-82.5 w-full max-w-162.5">
          {/* Main dashboard */}
          <div
            className="absolute left-1/2 top-1/3 w-96 
            -translate-x-1/2 -translate-y-1/2
            rounded-3xl border border-slate-200 bg-white p-5
            shadow-2xl shadow-violet-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Project overview</p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Website Redesign
                </h3>
              </div>

              <div className="flex -space-x-2">
                <Avatar letter="A" color="bg-violet-400" />
                <Avatar letter="S" color="bg-blue-400" />
                <Avatar letter="M" color="bg-emerald-400" />
              </div>
            </div>

            {/* Progress */}
            <div className="mt-7">
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">Project progress</span>

                <span className="font-semibold text-violet-600">72%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "72%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              <Stat label="Completed" value="24" />

              <Stat label="In progress" value="08" />

              <Stat label="Due soon" value="03" />
            </div>

            {/* Activity */}
            {/* <div className="mt-5 space-y-3">
              <Activity color="bg-emerald-400" width="w-32" />
              <Activity color="bg-violet-400" width="w-24" />
              <Activity color="bg-blue-400" width="w-28" />
            </div> */}
          </div>

          {/* Analytics card */}
          <motion.div
            className="absolute -right-2 -top-9 w-40
            rounded-2xl border border-slate-200 bg-white p-3.5
            shadow-xl shadow-violet-100"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: [0, 6, 0],
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.3,
              },
              x: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Productivity</span>

              <span className="text-[11px] font-semibold text-emerald-500">
                +18%
              </span>
            </div>

            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[5, 8, 6, 11, 9, 14].map((height, index) => (
                <motion.div
                  key={index}
                  className="w-full rounded-t bg-violet-400"
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 4}px` }}
                  transition={{
                    duration: 0.7,
                    delay: 0.7 + index * 0.08,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Task card */}
          <motion.div
            className="absolute bottom-12 -left-2 w-48
            rounded-2xl border border-slate-200 bg-white p-4
            shadow-xl shadow-violet-100"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: [0, -5, 0],
              y: [0, 8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.5,
              },
              x: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                ✓
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-900">
                  Task completed
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  Landing page design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="absolute bottom-4 right-0 flex items-center gap-4 rounded-2xl
          border border-slate-200 bg-white px-3 py-3 shadow-sm"
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
              delay: 0.8,
            }}
            whileHover={{
              y: -3,
              boxShadow: "0 10px 30px rgba(124, 58, 237, 0.08)",
            }}
          >
            <div className="flex -space-x-2">
              <Avatar letter="A" color="bg-violet-400" />
              <Avatar letter="M" color="bg-blue-400" />
              <Avatar letter="S" color="bg-pink-400" />
              <Avatar letter="R" color="bg-emerald-400" />
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-900">
                Built for modern teams
              </p>

              <p className="text-xs text-slate-400">
                Organizing work smarter every day
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function Avatar({ letter, color }) {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center
      rounded-full border-2 border-white
      text-[10px] font-semibold text-white ${color}`}
    >
      {letter}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs text-slate-400">{label}</p>

      <p className="mt-2 text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Activity({ color, width }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-2 w-2 rounded-full ${color}`} />

      <div className={`h-2 ${width} rounded-full bg-slate-100`} />

      <div className="ml-auto h-2 w-12 rounded-full bg-slate-100" />
    </div>
  );
}
