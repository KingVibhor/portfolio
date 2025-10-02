import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-extrabold"
      >
        Vibhor Kumbhare
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-700"
      >
        AI & Software Developer — I build voice-enabled apps, ML pipelines, and helpful tools.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg"
      >
        See my work
      </motion.a>
    </section>
  )
}