export default function ClientesPage() {
    return (
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Nuestros Clientes</h2>
        <p className="mb-4">
          Hemos trabajado con empresas de diversos sectores, brindando soluciones efectivas y generando resultados medibles.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          <img src="/images/clientes/cliente1.png" alt="Cliente 1" className="mx-auto max-h-20 object-contain" />
          <img src="/images/clientes/cliente2.png" alt="Cliente 2" className="mx-auto max-h-20 object-contain" />
          <img src="/images/clientes/cliente3.png" alt="Cliente 3" className="mx-auto max-h-20 object-contain" />
        </div>
      </section>
    )
  }