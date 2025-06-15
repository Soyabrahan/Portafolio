"use client";

import { AnimatedSection } from "../components/AnimatedComponents";

export default function Contacto() {
  return (
    <AnimatedSection
      id="contacto"
      className="flex flex-col items-center"
      style={{ marginTop: "40px", marginBottom: "40px" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-center">Contacto</h2>
      <p
        style={{ marginBottom: "24px", maxWidth: "500px", textAlign: "center" }}
      >
        Estoy abierto a nuevas oportunidades, pasantías y colaboraciones. No
        dudes en contactarme a través del siguiente formulario:
      </p>
      <form
        action="https://formspree.io/f/xgvykpev"
        method="POST"
        className="contact-form w-full max-w-lg"
      >
        <div className="form-group">
          <label className="form-label">Correo</label>
          <input type="email" name="email" placeholder="Tu Correo" required />
        </div>
        <div className="form-group">
          <label className="form-label">Mensaje</label>
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            style={{ height: "96px" }}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input type="text" name="name" placeholder="Tu Nombre" required />
        </div>
        <button
          type="submit"
          className="button"
          style={{ marginTop: "8px", alignSelf: "center" }}
        >
          Enviar
        </button>
      </form>
    </AnimatedSection>
  );
}
