function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white">
      <h1 className="text-4xl font-bold">Anu</h1>

      <ul className="flex gap-8 list-none">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Projects</li>
        <li className="cursor-pointer hover:text-gray-400">Skills</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;