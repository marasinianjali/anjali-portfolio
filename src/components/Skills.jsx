import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "Python",
    "Django",
    "Flask",
    "PHP",
    "Laravel",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "QGIS",
    "Git",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 text-white"
    >

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Skills
        </h2>

        {/* OUTER WRAPPER */}
        <div
          className="
            max-w-5xl
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            rounded-2xl
            p-8
          "
        >

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
                  hover:scale-105
                  transition
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;