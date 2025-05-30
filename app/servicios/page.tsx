"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import {
  Activity,
  Zap,
  Database,
  Layers,
  BarChart2,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Settings,
  Target,
  Award,
  TrendingUp,
  Phone,
  FileText,
  PenToolIcon as Tool,
} from "lucide-react"

export default function ServiciosPageRedesignedV2() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)

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

    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll(".service-item")
      serviceItems.forEach((item) => observer.observe(item))
    }

    if (benefitsRef.current) {
      const benefitItems = benefitsRef.current.querySelectorAll(".benefit-item")
      benefitItems.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: "calidad",
      icon: Activity,
      title: "Calidad de Energía",
      description:
        "Identificamos y resolvemos problemas de calidad de energía como armónicos, fluctuaciones de voltaje y factor de potencia bajo.",
      features: [
        "Análisis de calidad de energía eléctrica",
        "Estudios de armónicos y transitorios",
        "Soluciones para mitigación de disturbios",
      ],
    },
    {
      id: "codigo-red",
      icon: Zap,
      title: "Código de Red",
      description:
        "Ayudamos a su empresa a cumplir con los requisitos del Código de Red mexicano, evitando sanciones y optimizando instalaciones.",
      features: [
        "Diagnóstico de cumplimiento de Código de Red",
        "Implementación de medidas correctivas",
        "Certificación y documentación",
      ],
    },
    {
      id: "capacitores",
      icon: Database,
      title: "Bancos de Capacitores",
      description:
        "Diseñamos e implementamos bancos de capacitores a medida para corregir el factor de potencia y optimizar el rendimiento.",
      features: [
        "Bancos automáticos de capacitores",
        "Bancos fijos para corrección de factor",
        "Dimensionamiento y cálculo personalizado",
      ],
    },
    {
      id: "filtros",
      icon: Layers,
      title: "Filtros de Armónicas",
      description:
        "Implementamos soluciones para mitigar armónicos en su red eléctrica, mejorando la calidad de la energía.",
      features: [
        "Estudio y análisis de armónicos",
        "Diseño de filtros pasivos y activos",
        "Instalación de soluciones anti-armónicas",
      ],
    },
    {
      id: "soluciones",
      icon: BarChart2,
      title: "Soluciones Energéticas",
      description:
        "Servicios integrales de consultoría, diseño e implementación para optimizar el consumo energético y mejorar la eficiencia.",
      features: [
        "Auditorías energéticas completas",
        "Sistemas de monitoreo y gestión",
        "Optimización de instalaciones eléctricas",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section con más espacio superior */}
      <section className="relative pt-36 pb-24 bg-white overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-50 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-8">
              <Settings className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">Soluciones Profesionales</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales para optimizar la calidad y el consumo de energía eléctrica en la industria,
              cumpliendo con las normativas mexicanas.
            </p>

            <Link
              href="#servicios"
              className="inline-flex items-center px-8 py-4 bg-orange-300 hover:bg-orange-400 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-shine"
            >
              Explorar Servicios
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Servicios en formato horizontal */}
      <section id="servicios" className="py-20 bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios <span className="text-orange-500">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada servicio está diseñado para resolver problemas específicos y maximizar la eficiencia de sus
              instalaciones eléctricas
            </p>
          </div>

          <div ref={servicesRef} className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="service-item bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ "--index": index } as any}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Icono y color lateral */}
                    <div className="bg-orange-100 p-8 flex items-center justify-center md:w-1/4">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <IconComponent className="text-orange-500" size={36} />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-8 md:w-3/4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contacto"
                        className="inline-flex items-center text-orange-400 hover:text-orange-500 font-medium group"
                      >
                        Solicitar información
                        <ArrowRight
                          size={16}
                          className="ml-2 transform group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-6">
              <Target className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">Metodología</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro <span className="text-orange-500">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados exitosos en cada proyecto
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-orange-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contacto</h3>
                <p className="text-gray-600">Consulta inicial gratuita para entender sus necesidades específicas</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-orange-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico</h3>
                <p className="text-gray-600">Análisis completo de su instalación eléctrica actual</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-orange-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Tool className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementación</h3>
                <p className="text-gray-600">Instalación profesional con mínima interrupción operativa</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-orange-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seguimiento</h3>
                <p className="text-gray-600">Monitoreo continuo y soporte técnico especializado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-6">
              <Award className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">¿Por Qué Elegirnos?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ventajas <span className="text-orange-500">Competitivas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque integral y experiencia comprobada nos distingue en el mercado
            </p>
          </div>

          <div ref={benefitsRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="benefit-item bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ "--index": 0 } as any}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-300 rounded-2xl flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Garantía de Calidad</h3>
              </div>
              <p className="text-gray-600">
                Todos nuestros proyectos cuentan con garantía completa y seguimiento post-implementación para asegurar
                resultados óptimos.
              </p>
            </div>

            <div
              className="benefit-item bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ "--index": 1 } as any}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-300 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Soluciones a Medida</h3>
              </div>
              <p className="text-gray-600">
                Cada proyecto es único. Desarrollamos soluciones específicas adaptadas a las necesidades particulares de
                su empresa.
              </p>
            </div>

            <div
              className="benefit-item bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ "--index": 2 } as any}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-300 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ROI Comprobado</h3>
              </div>
              <p className="text-gray-600">
                Nuestras soluciones generan ahorros medibles y retorno de inversión comprobado en el corto y mediano
                plazo.
              </p>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-orange-50 to-gray-50"></div>
      </section>

      {/* CTA Final con color más claro */}
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
                className="inline-flex items-center px-10 py-4 bg-orange-300 hover:bg-orange-400 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 btn-shine group"
              >
                Contáctanos Ahora
                <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center px-10 py-4 bg-white border-2 border-orange-300 text-orange-500 hover:bg-orange-50 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Ver Catálogo Completo
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-gray-600 font-medium">Consulta Gratuita</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center mb-3">
                  <Shield className="text-white" size={20} />
                </div>
                <p className="text-gray-600 font-medium">Garantía de Calidad</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center mb-3">
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
