"use client";

import { AnimatedSection } from "../components/AnimatedComponents";

export default function SobreMi() {
  return (
    <AnimatedSection
      id="sobremi"
      style={{ marginTop: "40px", marginBottom: "40px" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2>Sobre Mi</h2>
      <p>
        Soy estudiante de noveno semestre de Ingeniería Informática, con
        experiencia en el desarrollo de software tanto en frontend como backend.{" "}
        <br />
        Trabajo con tecnologías como HTML, CSS, JavaScript, Python, Node.js,
        NestJS, C++ y C. Me apasiona aprender nuevas herramientas y enfrentar
        desafíos técnicos que permitan crear soluciones con impacto real.
      </p>
    </AnimatedSection>
  );
}
