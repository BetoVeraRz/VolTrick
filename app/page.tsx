import Link from 'next/link';
import { ArrowRight, Zap, Activity, BarChart2, Database, PieChart } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-light-bg to-gray py-24">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-dark tracking-tight drop-shadow-xl">
            Expertos en <span className="text-primary">Energía</span> Eléctrica
          </h1>
          <p className="mt-6 text-xl text-dark max-w-3xl mx-auto">
            Soluciones inteligentes para calidad de energía, cumplimiento de Código de Red y optimización energética para la industria.
          </p>
          <div className="mt-12 rounded-3xl shadow-2xl overflow-hidden border border-muted">
            <img
              src="/hero.jpg"
              alt="Ingeniería eléctrica profesional"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/servicios"
              className="inline-block px-8 py-4 text-white bg-primary hover:bg-secondary rounded-md text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-light-bg text-dark hover:bg-gray rounded-md text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg border border-muted"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para mejorar la calidad de energía y optimizar el consumo eléctrico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-light-bg p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Calidad de Energía</h3>
              <p className="mb-4">Análisis, diagnóstico y soluciones para problemas de calidad de energía eléctrica.</p>
              <Link href="/servicios#calidad" className="text-primary hover:text-secondary flex items-center gap-1">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 2 */}
            <div className="bg-light-bg p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Código de Red</h3>
              <p className="mb-4">Servicios de cumplimiento con la normativa de Código de Red para la industria.</p>
              <Link href="/servicios#codigo-red" className="text-primary hover:text-secondary flex items-center gap-1">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 3 */}
            <div className="bg-light-bg p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Bancos de Capacitores</h3>
              <p className="mb-4">Diseño e instalación de bancos de capacitores para corrección del factor de potencia.</p>
              <Link href="/servicios#capacitores" className="text-primary hover:text-secondary flex items-center gap-1">
                Saber más <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/servicios" 
              className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              En Voltrik nos distinguimos por ofrecer soluciones energéticas de alta calidad con un enfoque personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Experiencia</h3>
              <p>Contamos con años de experiencia en el sector eléctrico y energético mexicano.</p>
            </div>

            {/* Ventaja 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Calidad</h3>
              <p>Utilizamos tecnología de vanguardia y equipos certificados para garantizar resultados óptimos.</p>
            </div>

            {/* Ventaja 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">Eficiencia</h3>
              <p>Nuestras soluciones están diseñadas para maximizar el ahorro energético y el rendimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar la calidad de tu energía eléctrica?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una evaluación personalizada de tus necesidades energéticas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-white text-primary hover:bg-light-bg rounded-md text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Solicitar asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}

