import Link from 'next/link';
import { ArrowRight, Zap, Activity, Database } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-24">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 tracking-tight drop-shadow-xl">
            Expertos en <span className="text-orange-600">Energía</span> Eléctrica
          </h1>
          
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 mx-auto max-w-3xl">
            Soluciones inteligentes para calidad de energía, cumplimiento de Código de Red y optimización energética para la industria.
          </p>
          <div className="mt-8 md:mt-12 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <img
              src="/hero.jpg"
              alt="Ingeniería eléctrica profesional"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/servicios"
              className="inline-block px-6 md:px-8 py-3 md:py-4 text-white bg-orange-600 hover:bg-orange-700 rounded-md text-base md:text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 hover:bg-gray-100 rounded-md text-base md:text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg border border-gray-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-36 md:w-48 h-36 md:h-48 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
      </section>

      {/* Servicios destacados */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Nuestros Servicios</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Ofrecemos soluciones integrales para mejorar la calidad de energía y optimizar el consumo eléctrico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 transition-transform hover:translate-y-[-5px]">
              <div className="bg-orange-500 w-12 md:w-14 h-12 md:h-14 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Calidad de Energía</h3>
              <p className="mb-3 md:mb-4 text-gray-600">Análisis, diagnóstico y soluciones para problemas de calidad de energía eléctrica.</p>
              <Link href="/servicios#calidad" className="text-orange-500 hover:text-orange-600 flex items-center gap-1 font-medium">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 transition-transform hover:translate-y-[-5px]">
              <div className="bg-orange-500 w-12 md:w-14 h-12 md:h-14 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Código de Red</h3>
              <p className="mb-3 md:mb-4 text-gray-600">Servicios de cumplimiento con la normativa de Código de Red para la industria.</p>
              <Link href="/servicios#codigo-red" className="text-orange-500 hover:text-orange-600 flex items-center gap-1 font-medium">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 transition-transform hover:translate-y-[-5px]">
              <div className="bg-orange-500 w-12 md:w-14 h-12 md:h-14 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Bancos de Capacitores</h3>
              <p className="mb-3 md:mb-4 text-gray-600">Diseño e instalación de bancos de capacitores para corrección del factor de potencia.</p>
              <Link href="/servicios#capacitores" className="text-orange-500 hover:text-orange-600 flex items-center gap-1 font-medium">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link 
              href="/servicios" 
              className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-orange-500 text-white hover:bg-orange-600 rounded-md font-medium transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">¿Por qué elegirnos?</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              En Voltrik nos distinguimos por ofrecer soluciones energéticas de alta calidad con un enfoque personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Ventaja 1 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-l-orange-500 border-t border-r border-b border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-orange-600">Experiencia</h3>
              <p className="text-gray-600">Contamos con años de experiencia en el sector eléctrico y energético mexicano.</p>
            </div>

            {/* Ventaja 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-l-orange-500 border-t border-r border-b border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-orange-600">Calidad</h3>
              <p className="text-gray-600">Utilizamos tecnología de vanguardia y equipos certificados para garantizar resultados óptimos.</p>
            </div>

            {/* Ventaja 3 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-l-orange-500 border-t border-r border-b border-gray-200">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-orange-600">Eficiencia</h3>
              <p className="text-gray-600">Nuestras soluciones están diseñadas para maximizar el ahorro energético y el rendimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-16 bg-orange-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Listo para mejorar la calidad de tu energía eléctrica?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una evaluación personalizada de tus necesidades energéticas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 hover:bg-gray-100 rounded-md text-base md:text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Solicitar asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}

