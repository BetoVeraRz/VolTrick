"use client"

import { useEffect, useRef } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, Star, Zap } from "lucide-react"

export default function ContactoPageRedesigned() {
  const formRef = useRef<HTMLFormElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

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

    if (formRef.current) {
      const formItems = formRef.current.querySelectorAll(".form-item")
      formItems.forEach((item) => observer.observe(item))
    }

    if (contactRef.current) {
      const contactItems = contactRef.current.querySelectorAll(".contact-item")
      contactItems.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 bg-white overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-50 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-orange-50 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="text-orange-600 mr-2" size={20} />
              <span className="text-orange-800 font-medium">Hablemos de tu proyecto</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              Contáctanos <span className="text-orange-500">Hoy</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Estamos listos para ayudarte a optimizar tu instalación eléctrica. Obtén una consulta gratuita y descubre
              cómo podemos mejorar la eficiencia energética de tu empresa.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <CheckCircle className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <Clock className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm text-gray-700">Asesoría especializada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Formulario e información de contacto */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Formulario - 2/3 del ancho */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Envíanos tu <span className="text-orange-500">consulta</span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Completa el formulario y nuestro equipo de expertos se pondrá en contacto contigo para ofrecerte una
                    solución personalizada.
                  </p>
                </div>

                <form ref={formRef} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-item">
                      <label htmlFor="nombre" className="block mb-3 font-semibold text-gray-900">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        placeholder="Tu nombre completo"
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="form-item">
                      <label htmlFor="empresa" className="block mb-3 font-semibold text-gray-900">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        placeholder="Nombre de tu empresa"
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-item">
                      <label htmlFor="email" className="block mb-3 font-semibold text-gray-900">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="correo@empresa.com"
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="form-item">
                      <label htmlFor="telefono" className="block mb-3 font-semibold text-gray-900">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        placeholder="(55) 1234-5678"
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-item">
                    <label htmlFor="servicio" className="block mb-3 font-semibold text-gray-900">
                      Servicio de interés
                    </label>
                    <select
                      id="servicio"
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="calidad">Calidad de Energía</option>
                      <option value="codigo">Cumplimiento Código de Red</option>
                      <option value="capacitores">Bancos de Capacitores</option>
                      <option value="filtros">Filtros de Armónicas</option>
                      <option value="soluciones">Soluciones Energéticas Integrales</option>
                      <option value="consultoria">Consultoría General</option>
                    </select>
                  </div>

                  <div className="form-item">
                    <label htmlFor="mensaje" className="block mb-3 font-semibold text-gray-900">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      rows={6}
                      placeholder="Describe tu proyecto, necesidades específicas, problemas actuales o cualquier información relevante que nos ayude a entender mejor cómo podemos ayudarte..."
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-orange-400 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="form-item">
                    <div className="flex items-start gap-3 mb-6">
                      <input
                        type="checkbox"
                        id="acepto"
                        className="mt-1 w-5 h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-400"
                        required
                      />
                      <label htmlFor="acepto" className="text-sm text-gray-600">
                        Acepto el tratamiento de mis datos personales de acuerdo con la{" "}
                        <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                          política de privacidad
                        </a>{" "}
                        y autorizo el contacto para fines comerciales.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 group"
                    >
                      <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                      Enviar consulta
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Información de contacto - 1/3 del ancho */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Información de <span className="text-orange-500">contacto</span>
                  </h3>

                  <div ref={contactRef} className="space-y-6">
                    <div className="contact-item flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                        <p className="text-gray-600 font-medium">(55) 1234-5678</p>
                        <p className="text-sm text-gray-500">Lun - Vie, 9:00 - 18:00</p>
                      </div>
                    </div>

                    <div className="contact-item flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600 font-medium">info@voltrik.com</p>
                        <p className="text-sm text-gray-500">Respuesta en 24h</p>
                      </div>
                    </div>

                    <div className="contact-item flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Ubicación</h4>
                        <p className="text-gray-600 font-medium">Ciudad de México</p>
                        <p className="text-sm text-gray-500">Cobertura nacional</p>
                      </div>
                    </div>

                    <div className="contact-item flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Horarios</h4>
                        <p className="text-gray-600 font-medium">Lun - Vie</p>
                        <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta de beneficios */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">¿Por qué elegirnos?</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-orange-200 flex-shrink-0" />
                      <span className="text-sm">Consulta inicial gratuita</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-orange-200 flex-shrink-0" />
                      <span className="text-sm">+10 años de experiencia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-orange-200 flex-shrink-0" />
                      <span className="text-sm">Soluciones personalizadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-orange-200 flex-shrink-0" />
                      <span className="text-sm">Garantía de calidad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-orange-200 flex-shrink-0" />
                      <span className="text-sm">Soporte técnico continuo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transición suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* CTA de urgencia */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Necesitas atención <span className="text-orange-500">inmediata?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Para emergencias o consultas urgentes, contáctanos directamente por teléfono. Nuestro equipo está listo
                para ayudarte.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:+525512345678"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                  <Phone size={20} className="mr-3" />
                  Llamar ahora
                </a>
                <a
                  href="mailto:info@voltrik.com"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <Mail size={20} className="mr-3" />
                  Enviar email
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                    <Clock className="text-white" size={20} />
                  </div>
                  <p className="text-gray-600 font-medium">Respuesta rápida</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                    <Star className="text-white" size={20} />
                  </div>
                  <p className="text-gray-600 font-medium">Atención personalizada</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <p className="text-gray-600 font-medium">Sin compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
