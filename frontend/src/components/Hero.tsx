"use client";

import { AnimatedSection, AnimatedDiv } from "../components/AnimatedComponents";
import Image from "next/image";

export default function Hero() {
  return (
    <AnimatedSection
      id="inicio"
      className="head-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contenedor-principal">
        <div className="hero-section">
          <div className="hero-main-content">
            <div className="hero-text-content-wrapper">
              <div className="hero-title-container">
                <h1 className="hero-title">ABRAHAN RAMIREZ</h1>
              </div>
              <div className="hero-content">
                <div className="hero-info-container">
                  <p className="hero-info">
                    Estudiante apasionado de Ingeniería Informática enfocado en
                    el desarrollo de soluciones innovadoras.
                    <br />
                    Me encanta convertir problemas complejos en aplicaciones
                    elegantes y fáciles de usar.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <Image
                src="/abrahan.png"
                alt="Abrahan Ramirez"
                width={300}
                height={300}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
