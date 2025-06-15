"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { AnimatedSection, AnimatedDiv } from "../components/AnimatedComponents";

// Definir la interfaz para la estructura de un proyecto
interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  link: string;
}

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
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await axios.get<Proyecto[]>(
          "https://portafolioabrahan-backend.onrender.com/proyecto"
        );
        setProyectos(response.data);
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
      }
    };

    fetchProyectos();
  }, []);

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
        {proyectos.length > 0 ? (
          proyectos.map((proy) => (
            <AnimatedDiv
              key={proy.id}
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
          ))
        ) : (
          <p>Cargando proyectos o no hay proyectos disponibles...</p>
        )}
      </AnimatedDiv>
    </AnimatedSection>
  );
}
