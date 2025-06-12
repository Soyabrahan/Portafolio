export default function Contacto() {
  return (
    <section id="contacto" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <h2>Contacto</h2>
      <p style={{ marginBottom: "24px", maxWidth: "500px" }}>
        Estoy abierto a nuevas oportunidades, pasantías y colaboraciones. No
        dudes en contactarme a través del siguiente formulario:
      </p>
      <form
        action="https://formspree.io/f/xgvykpev"
        method="POST"
        className="contact-form"
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
          style={{ marginTop: "8px", alignSelf: "flex-start" }}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
