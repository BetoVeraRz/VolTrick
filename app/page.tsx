import Link from 'next/link';
import { ArrowRight, Zap, Activity, Database, Shield, CheckCircle, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-16 md:pt-28 pb-6 md:pb-10">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
            {/* Columna izquierda con información */}
            <div className="md:w-1/2 md:pr-4">
              <h1 className="max-md:mt-7 text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 tracking-tight text-left">
                Expertos en <span className="energy-text relative">Energía</span> Eléctrica
              </h1>

              <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 text-left">
                Soluciones tecnológicas avanzadas para calidad de energía, cumplimiento de Código de Red y optimización
                energética para la industria.
              </p>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mt-8 text-left">
                <div className="flex items-start gap-2">
                  <Shield className="text-orange-500 mt-.5" size={40} />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Certificaciones</span> que garantizan la calidad de nuestros servicios
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-orange-500 mt-.5" size={40} />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">+200 proyectos</span> implementados con éxito en el sector industrial
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="text-orange-500 mt-.5" size={40} />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">10+ años</span> de experiencia en el sector eléctrico
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                <Link
                  href="/servicios"
                  className="inline-block px-6 md:px-8 py-3 md:py-4 text-white bg-orange-600 hover:bg-orange-700 rounded-md text-base md:text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg">
                  Nuestros Servicios
                </Link>
                <Link
                  href="/contacto"
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 hover:bg-gray-100 rounded-md text-base md:text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg border border-gray-300">
                  Solicitar Consultoría
                </Link>
              </div>
            </div>

            {/* Columna derecha con imagen */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full">
                <img
                  src="/image.png"
                  alt="Ingeniería eléctrica profesional"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Servicios destacados */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Soluciones Profesionales</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Ofrecemos servicios de alta calidad para optimizar la eficiencia energética y garantizar el cumplimiento normativo de su empresa.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Servicio 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:border-orange-100 group">
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Activity className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">Calidad de Energía</h3>
              <p className="mb-4 text-gray-600">Diagnóstico avanzado y soluciones de alto rendimiento para problemas de calidad energética que afectan su operación.</p>
              <Link href="/servicios#calidad" className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors">
                Conocer servicio <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:border-orange-100 group">
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Zap className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">Código de Red</h3>
              <p className="mb-4 text-gray-600">Aseguramos que su empresa cumpla con la normativa del Código de Red, evitando sanciones y optimizando instalaciones.</p>
              <Link href="/servicios#codigo-red" className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors">
                Conocer servicio <ArrowRight size={16} />
              </Link>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:border-orange-100 group">
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Database className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">Bancos de Capacitores</h3>
              <p className="mb-4 text-gray-600">Implementación de sistemas avanzados para corrección del factor de potencia, mejorando eficiencia y reduciendo costos.</p>
              <Link href="/servicios#capacitores" className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors">
                Conocer servicio <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/servicios" 
              className="inline-block px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 rounded-md font-semibold transition-colors">
              Ver catálogo completo de servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Excelencia en Ingeniería Eléctrica</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Nuestros servicios combinan experiencia técnica, tecnología de punta y un enfoque centrado en resultados medibles.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Trayectoria Comprobada</h3>
              <p className="text-gray-600">Contamos con un historial de proyectos exitosos en grandes industrias y compañías líderes del mercado mexicano.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Proyectos en múltiples sectores industriales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Personal certificado y altamente capacitado</span>
                </li>
              </ul>
            </div>

            {/* Ventaja 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <Shield className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Garantía de Calidad</h3>
              <p className="text-gray-600">Utilizamos equipamiento de última generación y metodologías avanzadas que aseguran resultados confiables y precisos.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Tecnología de medición avanzada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Seguimiento de estándares internacionales</span>
                </li>
              </ul>
            </div>

            {/* Ventaja 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <Activity className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Retorno de Inversión</h3>
              <p className="text-gray-600">Nuestras soluciones están diseñadas para optimizar costos operativos y maximizar la eficiencia energética de su empresa.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Análisis de costo-beneficio detallado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Soluciones personalizadas a su operación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Elemento decorativo */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-orange-100 opacity-50"></div>
        <div className="absolute -left-10 w-48 h-48 rounded-full bg-orange-100 opacity-40"></div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Optimice sus instalaciones eléctricas con el respaldo de expertos
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90">
            Agende una consulta sin compromiso con nuestro equipo de ingenieros especializados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 rounded-md text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              Solicitar consultoría
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portafolio"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md text-lg font-semibold transition-colors"
            >
              Ver casos de éxito
            </Link>
          </div>
        </div>
        
        {/* Elementos decorativos para el fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
        </div>
      </section>
    </>
  );
}

