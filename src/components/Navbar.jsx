function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-10 py-6
        bg-white/5
        backdrop-blur-md
        border-b border-white/10
        text-white
      "
    >
      <h1 className="text-4xl font-bold tracking-tight">
        Anjali
      </h1>

      <ul className="hidden md:flex gap-8 list-none text-sm font-medium">
        <div className="md:hidden">
          Menu
        </div>

        <li>
          <a href="#home" className="hover:text-purple-400 transition">
            Home
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
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;