export default function Contacto() {
  return (
    <section id="contacto" className="my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Contacto</h2>
      <p className="mb-6 text-gray-700 max-w-2xl">
        Estoy abierto a nuevas oportunidades, pasantías y colaboraciones. No
        dudes en contactarme a través del siguiente formulario:
      </p>
      <form className="max-w-xl flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Correo</label>
          <input
            type="email"
            placeholder="Tu Correo"
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mensaje</label>
          <textarea
            placeholder="Tu Mensaje"
            className="w-full border rounded-lg px-3 py-2 h-24 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Nombre</label>
          <input
            type="text"
            placeholder="Tu Nombre"
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition self-start"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
