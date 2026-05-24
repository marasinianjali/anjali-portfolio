function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">
        Hello, I'm Anu
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        Django Backend Developer | React Learner | GIS Enthusiast
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        View Projects
      </button>
    </section>
  );
}

export default Hero;