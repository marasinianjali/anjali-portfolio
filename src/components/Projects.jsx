import { motion } from "framer-motion";

function Projects() {

 const projects = [
  {
    title: "CreditBook",
    description:
      "Advanced bookkeeping and stock prediction system using Django.",
    github: "https://github.com/marasinianjali/creditbook",
  },

  {
    title: "Tourism GIS",
    description:
      "Interactive tourism and district mapping platform.",
    github: "https://github.com/marasinianjali/tourism-gis",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern React and Tailwind portfolio website.",
    github: "https://github.com/marasinianjali/anjali-portfolio",
  },
];
  return (
    <section id="projects" className="py-10 px-10">

       <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                p-8
                rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                hover:border-purple-500/50
                transition
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400">
                {project.description}
              </p>
              <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block mt-6
                        px-5 py-2
                        rounded-xl
                        bg-purple-600
                        hover:bg-purple-500
                        transition
                    "
                    >
                    GitHub
                </a>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;