"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import {
  Users,
  Target,
  BookOpen,
  Award,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Coffee,
  ArrowRight,
  Zap,
  Shield,
  Activity,
  Star,
  Calendar,
  MapPin,
  Lightbulb,
  Settings,
  Globe,
} from "lucide-react"

export default function NosotrosPageMinimal() {
  const achievementsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    })

    // Observar elementos
    if (achievementsRef.current) {
      const items = achievementsRef.current.querySelectorAll(".achievement-item")
      items.forEach((item) => observer.observe(item))
    }

    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll(".stat-item")
      statItems.forEach((item) => observer.observe(item))
    }

    if (teamRef.current) {
      const teamItems = teamRef.current.querySelectorAll(".team-item")
      teamItems.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section Minimalista */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-50 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-40"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-8">
              <Zap className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">Expertos en Energía Eléctrica</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              Sobre <span className="text-orange-500">Voltrik</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Una empresa mexicana especializada en soluciones de calidad de energía eléctrica y servicios profesionales
              para la industria desde 2015.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <Calendar className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">Fundada en 2015</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <MapPin className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">México</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">+50 Proyectos</span>
              </div>
            </div>

            <Link
              href="#historia"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-shine"
            >
              Conoce Nuestra Historia
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Estadísticas Minimalistas */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="stat-item text-center" style={{ "--index": 0 } as React.CSSProperties}>
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+50</h3>
              <p className="text-gray-600">Proyectos</p>
            </div>

            <div className="stat-item text-center" style={{ "--index": 1 } as React.CSSProperties}>
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Coffee className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+10</h3>
              <p className="text-gray-600">Años</p>
            </div>

            <div className="stat-item text-center" style={{ "--index": 2 } as React.CSSProperties}>
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Expertos</p>
            </div>

            <div className="stat-item text-center" style={{ "--index": 3 } as React.CSSProperties}>
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Éxito</p>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Historia y Logros */}
      <section id="historia" className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-4 py-2 mb-6">
                <Briefcase className="text-orange-600 mr-2" size={18} />
                <span className="text-orange-800 font-medium text-sm">Nuestra Historia</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Una Historia de <span className="text-orange-500">Innovación</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada en 2015, Voltrik nació con la misión de proporcionar soluciones efectivas para los problemas de
                calidad de energía que afectan a las empresas mexicanas.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lo que comenzó como una pequeña consultoría ha crecido hasta convertirse en un referente en el sector de
                la ingeniería eléctrica especializada, atendiendo proyectos para grandes industrias a lo largo del país.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group"
              >
                Trabajemos juntos
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>

            <div ref={achievementsRef} className="space-y-6">
              <div
                className="achievement-item bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                style={{ "--index": 0 } as React.CSSProperties}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovación Constante</h3>
                    <p className="text-gray-600">
                      Implementamos tecnologías de vanguardia para ofrecer las mejores soluciones energéticas.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="achievement-item bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                style={{ "--index": 1 } as React.CSSProperties}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Soluciones Personalizadas</h3>
                    <p className="text-gray-600">
                      Cada proyecto es único y desarrollamos soluciones específicas para cada cliente.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="achievement-item bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                style={{ "--index": 2 } as React.CSSProperties}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Alcance Nacional</h3>
                    <p className="text-gray-600">
                      Atendemos proyectos en todo México con el mismo nivel de excelencia y profesionalismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Misión, Visión y Valores Minimalista */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-orange-500">Principios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los valores que nos guían para brindar el mejor servicio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Misión */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecer soluciones energéticas innovadoras y de alta calidad que mejoren la eficiencia, reduzcan costos
                y optimicen el funcionamiento de las instalaciones eléctricas.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como líderes en soluciones de calidad de energía en México, destacándonos por nuestra
                excelencia técnica e innovación constante.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Excelencia en cada proyecto</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Integridad y transparencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Innovación continua</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Compromiso total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Equipo Profesional - Sin nombres específicos */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-6">
              <Users className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">Nuestro Equipo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Profesionalismo y <span className="text-orange-500">Experiencia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con un equipo de ingenieros expertos certificados en calidad de energía, cumplimiento del Código
              de Red y soluciones energéticas avanzadas.
            </p>
          </div>

          <div ref={teamRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Liderazgo */}
            <div className="team-item text-center" style={{ "--index": 0 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto icon-float">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Liderazgo Técnico</h3>
              <p className="text-gray-600 leading-relaxed">
                Dirección estratégica con amplia experiencia en análisis de sistemas eléctricos complejos y gestión de
                proyectos industriales de gran escala.
              </p>
            </div>

            {/* Consultoría */}
            <div className="team-item text-center" style={{ "--index": 1 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto icon-float">
                <Activity className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoría Especializada</h3>
              <p className="text-gray-600 leading-relaxed">
                Asesoría técnica especializada en soluciones eléctricas personalizadas y atención directa a clientes
                industriales con necesidades específicas.
              </p>
            </div>

            {/* Innovación */}
            <div className="team-item text-center" style={{ "--index": 2 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto icon-float">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo e Innovación</h3>
              <p className="text-gray-600 leading-relaxed">
                Coordinación de desarrollo digital, estrategia de marca y implementación de tecnologías innovadoras para
                optimizar procesos.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center bg-gray-50 rounded-full px-6 py-3">
              <CheckCircle className="text-orange-500 mr-2" size={20} />
              <span className="text-gray-700 font-medium">Equipo certificado con +10 años de experiencia</span>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* CTA Final Minimalista */}
      <section className="py-20 bg-orange-50 relative">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para <span className="text-orange-500">Trabajar Juntos?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Permítenos ayudarte a optimizar tu instalación eléctrica y mejorar la calidad de tu energía con soluciones
              personalizadas y resultados garantizados.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contacto"
                className="inline-flex items-center px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 btn-shine group"
              >
                Contáctanos Ahora
                <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center px-10 py-4 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Ver Servicios
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-gray-600 font-medium">Consulta Gratuita</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                  <Shield className="text-white" size={20} />
                </div>
                <p className="text-gray-600 font-medium">Garantía de Calidad</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                  <Star className="text-white" size={20} />
                </div>
                <p className="text-gray-600 font-medium">Resultados Comprobados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}