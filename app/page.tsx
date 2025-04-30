"use client"

import { useEffect, useRef } from "react"
import Link from 'next/link';
import { ArrowRight, Zap, Activity, Database, Shield, CheckCircle, Award } from 'lucide-react';

export default function Page() {
  const serviciosRef = useRef<HTMLDivElement>(null)
  const ventajasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Función para animar elementos cuando entran en el viewport
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añadir clase para animar
          entry.target.classList.add("animate-in")
        }
      })
    }

    // Configurar el observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    })

    // Observar elementos de servicios
    if (serviciosRef.current) {
      const servicioItems = serviciosRef.current.querySelectorAll(".servicio-item")
      servicioItems.forEach((item) => observer.observe(item))
    }

    // Observar elementos de ventajas
    if (ventajasRef.current) {
      const ventajaItems = ventajasRef.current.querySelectorAll(".ventaja-item")
      ventajaItems.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

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
      <section className="py-12 md:py-16 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 relative inline-block">
              Soluciones Profesionales
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300"></span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 mt-6">
              Ofrecemos servicios de alta calidad para optimizar la eficiencia energética y garantizar el cumplimiento
              normativo de su empresa.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div ref={serviciosRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Servicio 1 */}
            <div
              className="servicio-item bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gradient-border"
              style={{ "--index": "0" } as React.CSSProperties}
            >
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors icon-pulse">
                <Activity className="text-orange-600 icon-float" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                Calidad de Energía
              </h3>
              <p className="mb-4 text-gray-600">
                Diagnóstico avanzado y soluciones de alto rendimiento para problemas de calidad energética que afectan
                su operación.
              </p>
              <Link
                href="/servicios#calidad"
                className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  Conocer servicio
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Servicio 2 */}
            <div
              className="servicio-item bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gradient-border"
              style={{ "--index": "1" } as React.CSSProperties}
            >
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors icon-pulse">
                <Zap className="text-orange-600 icon-float" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                Código de Red
              </h3>
              <p className="mb-4 text-gray-600">
                Aseguramos que su empresa cumpla con la normativa del Código de Red, evitando sanciones y optimizando
                instalaciones.
              </p>
              <Link
                href="/servicios#codigo-red"
                className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  Conocer servicio
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Servicio 3 */}
            <div
              className="servicio-item bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gradient-border"
              style={{ "--index": "2" } as React.CSSProperties}
            >
              <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors icon-pulse">
                <Database className="text-orange-600 icon-float" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                Bancos de Capacitores
              </h3>
              <p className="mb-4 text-gray-600">
                Implementación de sistemas avanzados para corrección del factor de potencia, mejorando eficiencia y
                reduciendo costos.
              </p>
              <Link
                href="/servicios#capacitores"
                className="text-orange-500 hover:text-orange-700 flex items-center gap-1 font-medium transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  Conocer servicio
                </span>
                <ArrowRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 mb-0">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 rounded-md font-semibold transition-colors btn-shine"
            >
              Ver catálogo completo de servicios
            </Link>
          </div>
        </div>

        {/* Transición entre secciones - forma de onda */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#F9FAFB", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad1)"
              d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-24 bg-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo - eliminada la decoración superior */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Patrón de puntos */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                backgroundImage: "radial-gradient(#FF8A3D 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Círculos decorativos */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-orange-100 opacity-50"></div>
          <div className="absolute -bottom-20 left-1/4 w-48 h-48 rounded-full bg-orange-100 opacity-40"></div>

          {/* Formas geométricas */}
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rotate-12 bg-orange-100 opacity-30"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 relative inline-block">
              Excelencia en Ingeniería Eléctrica
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300"></span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 mt-6">
              Nuestros servicios combinan experiencia técnica, tecnología de punta y un enfoque centrado en resultados
              medibles.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div ref={ventajasRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div
              className="ventaja-item bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10 gradient-border"
              style={{ "--index": "0" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6 icon-pulse">
                <Award className="text-orange-600 icon-float" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 relative">
                Trayectoria Comprobada
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Contamos con un historial de proyectos exitosos en grandes industrias y compañías líderes del mercado
                mexicano.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Proyectos en múltiples sectores industriales
                  </span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Personal certificado y altamente capacitado
                  </span>
                </li>
              </ul>
            </div>

            {/* Ventaja 2 */}
            <div
              className="ventaja-item bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10 gradient-border"
              style={{ "--index": "1" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6 icon-pulse">
                <Shield className="text-orange-600 icon-float" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 relative">
                Garantía de Calidad
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Utilizamos equipamiento de última generación y metodologías avanzadas que aseguran resultados confiables
                y precisos.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Tecnología de medición avanzada
                  </span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Seguimiento de estándares internacionales
                  </span>
                </li>
              </ul>
            </div>

            {/* Ventaja 3 */}
            <div
              className="ventaja-item bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10 gradient-border"
              style={{ "--index": "2" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6 icon-pulse">
                <Activity className="text-orange-600 icon-float" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 relative">
                Retorno de Inversión
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Nuestras soluciones están diseñadas para optimizar costos operativos y maximizar la eficiencia
                energética de su empresa.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Análisis de costo-beneficio detallado
                  </span>
                </li>
                <li className="flex items-center gap-2 group">
                  <CheckCircle
                    size={16}
                    className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Soluciones personalizadas a su operación
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

