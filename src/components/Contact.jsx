import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-32 px-10">

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-zinc-400 mb-10">
          Interested in working together or discussing projects?
        </p>

        <a
            href="mailto:anumarasini391@gmail.com"
            className="
                inline-block
                px-8 py-4
                rounded-2xl
                bg-purple-600
                hover:bg-purple-500
                transition
            "
            >
            Email Me
        </a>

      </motion.div>

    </section>
  );
}

export default Contact;