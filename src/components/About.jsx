function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-16 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          About Me
        </h2>

        <div
          className="
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            rounded-2xl
            p-8
          "
        >

          <p className="text-zinc-400 text-lg leading-8">
            I am a backend developer focused on building scalable web
            applications using Django, Django REST Framework, Flask,
            and React.
          </p>

          <p className="text-zinc-400 text-lg leading-8 mt-6">
            I worked at Lead Mark Infosys Pvt. Ltd. from January 2025
            to December 2025 as an Intern to Junior Developer where
            I contributed to travel platforms, multi-tenant systems,
            authentication architectures, and backend development.
          </p>

          <p className="text-zinc-400 text-lg leading-8 mt-6">
            Currently, I am focused on improving my frontend skills
            with React while continuing backend system design and API
            development.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;