import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "QGIS",
    "Git",
    "PostgreSQL",
  ];

  return (
    <section id="skills" className="py-32 px-10">

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold mb-16">
          Skills
        </h2>

        <div className="flex flex-wrap gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                px-6 py-3
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                hover:bg-purple-500/20
                transition
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;