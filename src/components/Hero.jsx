import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">

      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold leading-tight">
          Hey, I'm
          <span className="text-purple-400"> Anjali</span>
        </h1>

        <h2 className="text-5xl font-bold text-zinc-300">
          Django Backend Developer
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl">
          Building scalable backend systems and modern web applications.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="#contact"
            className="
      px-6 py-3 rounded-xl 
      bg-white/10 border border-white/10 
      hover:bg-white/20 transition
    "
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="
      px-6 py-3 rounded-xl 
      bg-purple-600 hover:bg-purple-500 transition
    "
          >
            View Projects
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;