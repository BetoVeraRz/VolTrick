// Estética elevada para HomePage usando Tailwind y animaciones suaves

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black text-blue-900 tracking-tight drop-shadow-xl animate-fade-up">
          Energía Eficiente
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto animate-fade-up animate-delay-200">
          Soluciones inteligentes para ahorrar energía y mejorar la calidad eléctrica en hogares, industrias y comercios.
        </p>
        <div className="mt-12 rounded-3xl shadow-2xl overflow-hidden border border-blue-200 animate-fade-up animate-delay-400">
          <img
            src="/images/hero.jpg"
            alt="Subestación eléctrica"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mt-10 animate-fade-up animate-delay-600">
          <a
            href="/objetivo"
            className="inline-block px-10 py-4 text-white bg-blue-800 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Conocer más
          </a>
        </div>
      </div>

      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float delay-300"></div>
    </section>
  )
}

