const proyectos = [
  {
    nombre: "Project Alpha",
    descripcion:
      "Aplicación web para la gestión de tareas y proyectos, desarrollada con React y Node.js.",
    imagen: "/assets/proyecto1.jpg",
    link: "#",
  },
  {
    nombre: "Project Beta",
    descripcion:
      "Aplicación móvil para el seguimiento de metas de entrenamiento, desarrollada con React Native.",
    imagen: "/assets/proyecto2.jpg",
    link: "#",
  },
  {
    nombre: "Project Gamma",
    descripcion:
      "Panel interactivo de visualización de datos para análisis de ventas, creado con Python y D3.js.",
    imagen: "/assets/proyecto3.jpg",
    link: "#",
  },
];

export default function ProyectosDestacados() {
  return (
    <section id="proyectos" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <h2>Proyectos Destacados</h2>
      <div className="project-list">
        {proyectos.map((proy) => (
          <div key={proy.nombre} className="project-item">
            <img
              src={proy.imagen}
              alt={proy.nombre}
              className="project-image"
            />
            <div className="project-content">
              <div>
                <h3 className="project-title">{proy.nombre}</h3>
                <p className="project-description">{proy.descripcion}</p>
              </div>
              <a
                href={proy.link}
                className="button"
                style={{ alignSelf: "flex-end" }}
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
