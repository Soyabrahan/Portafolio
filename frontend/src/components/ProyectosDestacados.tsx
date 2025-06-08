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
    <section id="proyectos" className="my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Proyectos Destacados
      </h2>
      <div className="flex flex-col gap-8">
        {proyectos.map((proy) => (
          <div
            key={proy.nombre}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={proy.imagen}
              alt={proy.nombre}
              className="w-full md:w-1/3 object-cover h-48 md:h-auto"
            />
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <h3 className="text-lg font-semibold mb-2">{proy.nombre}</h3>
                <p className="text-gray-600 mb-4">{proy.descripcion}</p>
              </div>
              <a
                href={proy.link}
                className="self-end px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
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
