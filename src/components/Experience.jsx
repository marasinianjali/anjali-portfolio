import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 md:px-12 py-20 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            rounded-2xl
            p-8
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">

            <div>
              <h3 className="text-2xl font-bold text-purple-400">
                Junior Developer Intern
              </h3>

              <p className="text-zinc-300 mt-2">
                Lead Mark Infosys Pvt. Ltd.
              </p>
            </div>

            <p className="text-zinc-400">
              Jan 2025 - Dec 2025
            </p>

          </div>

          <div className="mt-6 text-zinc-400 leading-8 space-y-4">

            <p>
              Worked on backend development using Python, Django, and Flask
              while contributing to real-world web applications and scalable
              systems.
            </p>

            <p>
              Contributed to travel platforms, authentication systems,
              RBAC implementations, and multi-tenant architecture projects
              including the Dobato tourism platform.
            </p>

            <p>
              Collaborated on API development, backend logic, database
              management, and modern web application workflows.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;