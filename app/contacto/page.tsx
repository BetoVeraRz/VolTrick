export default function ContactoPage() {
    return (
      <section className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Contáctanos</h2>
        <p className="mb-4">
          ¿Tienes dudas o deseas una asesoría personalizada? Escríbenos:
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded" />
          <textarea placeholder="Mensaje" className="w-full border p-2 rounded h-32" />
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Enviar</button>
        </form>
      </section>
    )
  }