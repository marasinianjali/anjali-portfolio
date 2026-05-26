import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/5 backdrop-blur-md
        border-b border-white/10
        text-white
      "
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Anjali
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-purple-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;