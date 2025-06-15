"use client";

import { AnimatedSection, AnimatedDiv } from "../components/AnimatedComponents";

const tecnologias = [
  {
    nombre: "HTML",
    icono: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L2.5 27.5L15 30L27.5 27.5L30 0H0ZM24.65 8.75H9.1L9.4625 12.5H24.2875L23.285 24.1687L14.9875 26.25L6.69375 24.1925L6.1625 18.75H9.9375L10.175 21.25L15 22.2125L19.8 21.25L20.1625 16.25H6.05L5 5H25L24.65 8.75Z"
          fill="#E65100"
        />
      </svg>
    ),
  },
  { nombre: "CSS", icono: "/css.svg" },
  { nombre: "JavaScript", icono: "/javascript.svg" },
  { nombre: "React", icono: "/react.svg" },
  { nombre: "Node.js", icono: "/node.svg" },
  { nombre: "Express.js", icono: "/express.svg" },
  { nombre: "SQL", icono: "/sql.svg" },
  { nombre: "Python", icono: "/python.svg" },
  { nombre: "C", icono: "/c.svg" },
  { nombre: "C++", icono: "/c++.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Tecnologias() {
  return (
    <AnimatedSection
      className="my-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2>Tecnologias</h2>
      <AnimatedDiv className="tech-grid" variants={containerVariants}>
        {tecnologias.map((tec) => (
          <AnimatedDiv
            key={tec.nombre}
            className="card"
            variants={itemVariants}
          >
            {typeof tec.icono === "string" ? (
              <img src={tec.icono} alt={tec.nombre} className="tech-icon" />
            ) : (
              <span className="tech-icon flex items-center justify-center">
                {tec.icono}
              </span>
            )}
            <span className="tech-name">{tec.nombre}</span>
          </AnimatedDiv>
        ))}
      </AnimatedDiv>
    </AnimatedSection>
  );
}
