const tecnologias = [
  { nombre: "HTML", icono: "/assets/html.svg" },
  { nombre: "CSS", icono: "/assets/css.svg" },
  { nombre: "JavaScript", icono: "/assets/js.svg" },
  { nombre: "React", icono: "/assets/react.svg" },
  { nombre: "Node.js", icono: "/assets/nodejs.svg" },
  { nombre: "Express.js", icono: "/assets/express.svg" },
  { nombre: "SQL", icono: "/assets/sql.svg" },
  { nombre: "Python", icono: "/assets/python.svg" },
  { nombre: "C", icono: "/assets/c.svg" },
  { nombre: "C++", icono: "/assets/cpp.svg" },
];

export default function Tecnologias() {
  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Tecnologias</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {tecnologias.map((tec) => (
          <div
            key={tec.nombre}
            className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-white shadow-sm"
          >
            {/* Aquí va el ícono real, reemplaza el src cuando tengas los íconos */}
            <img src={tec.icono} alt={tec.nombre} className="w-6 h-6" />
            <span className="font-medium text-gray-700">{tec.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
