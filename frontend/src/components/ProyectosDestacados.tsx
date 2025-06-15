"use client";

import { AnimatedSection, AnimatedDiv } from "../components/AnimatedComponents";

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function ProyectosDestacados() {
  return (
    <AnimatedSection
      id="proyectos"
      style={{ marginTop: "40px", marginBottom: "40px" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2>Proyectos Destacados</h2>
      <AnimatedDiv className="project-list" variants={containerVariants}>
        {proyectos.map((proy) => (
          <AnimatedDiv
            key={proy.nombre}
            className="project-item"
            variants={itemVariants}
          >
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
          </AnimatedDiv>
        ))}
      </AnimatedDiv>
    </AnimatedSection>
  );
}
