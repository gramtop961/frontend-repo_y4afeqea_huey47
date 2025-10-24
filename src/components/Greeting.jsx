import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <section className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/30 to-cyan-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Hello, World!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-base sm:text-lg text-gray-600"
        >
          A tiny starter you can actually enjoy looking at.
        </motion.p>
      </div>
    </section>
  );
}
