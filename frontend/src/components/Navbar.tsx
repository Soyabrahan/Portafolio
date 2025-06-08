export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="font-bold text-lg">Abrahan Portafolio</div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <a href="#inicio" className="hover:text-blue-600 transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#sobremi" className="hover:text-blue-600 transition">
            Sobre mi
          </a>
        </li>
        <li>
          <a href="#proyectos" className="hover:text-blue-600 transition">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-blue-600 transition">
            Contacto
          </a>
        </li>
      </ul>
      <a
        href="#curriculum"
        className="hidden md:inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Currículum
      </a>
      {/* Menú móvil (opcional, puedes agregarlo después) */}
    </nav>
  );
}
