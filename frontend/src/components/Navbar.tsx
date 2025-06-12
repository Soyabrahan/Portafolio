export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Abrahan Portafolio</div>
      <div className="navbar-elements">
        <ul className="navbar-links hidden md:flex">
          <li>
            <a href="#inicio" className="navbar-link-item">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobremi" className="navbar-link-item">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="navbar-link-item">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="navbar-link-item">
              Contacto
            </a>
          </li>
        </ul>
        <a href="#curriculum" className="button">
          Currículum
        </a>
      </div>
      {/* Menú móvil (opcional, puedes agregarlo después) */}
    </nav>
  );
}
