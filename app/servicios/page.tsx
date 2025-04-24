import { Activity, Zap, Database, Layers, BarChart2 } from 'lucide-react';

export default function ServiciosPage() {
  return (
    <>
      {/* Cabecera de servicios */}
      <section className="bg-light-bg py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-lg">
              En Voltrik ofrecemos soluciones integrales para optimizar la calidad y el consumo de energía eléctrica en la industria, 
              cumpliendo con las normativas mexicanas y maximizando la eficiencia de sus instalaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Servicio 1: Calidad de Energía */}
      <section id="calidad" className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-primary p-3 rounded-lg mb-6">
                <Activity size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Calidad de Energía</h2>
              <p className="mb-4">
                Identificamos y resolvemos problemas de calidad de energía como armónicos, fluctuaciones de voltaje, 
                factor de potencia bajo y otros fenómenos que afectan el rendimiento y la vida útil de sus equipos.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Análisis de calidad de energía eléctrica</li>
                <li>Estudios de armónicos y transitorios</li>
                <li>Soluciones para mitigación de disturbios eléctricos</li>
                <li>Mantenimiento preventivo de sistemas eléctricos</li>
                <li>Auditorías energéticas completas</li>
              </ul>
              <a
                href="/contacto"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary rounded-md transition-colors"
              >
                Solicitar asesoría
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Calidad de Energía"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 2: Código de Red */}
      <section id="codigo-red" className="py-16 bg-light-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Cumplimiento de Código de Red"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center bg-primary p-3 rounded-lg mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Cumplimiento de Código de Red</h2>
              <p className="mb-4">
                Ayudamos a su empresa a cumplir con los requisitos del Código de Red mexicano, 
                evitando sanciones y optimizando sus instalaciones eléctricas conforme a la normativa vigente.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Diagnóstico de cumplimiento de Código de Red</li>
                <li>Implementación de medidas correctivas</li>
                <li>Certificación y documentación de cumplimiento</li>
                <li>Capacitación sobre normativas eléctricas</li>
                <li>Monitoreo continuo de parámetros eléctricos</li>
              </ul>
              <a
                href="/contacto"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary rounded-md transition-colors"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 3: Bancos de Capacitores */}
      <section id="capacitores" className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-primary p-3 rounded-lg mb-6">
                <Database size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Bancos de Capacitores</h2>
              <p className="mb-4">
                Diseñamos e implementamos bancos de capacitores a medida para corregir el factor de potencia, 
                reducir las pérdidas de energía y optimizar el rendimiento de su instalación eléctrica.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Bancos automáticos de capacitores</li>
                <li>Bancos fijos para corrección de factor de potencia</li>
                <li>Dimensionamiento y cálculo personalizado</li>
                <li>Instalación y puesta en marcha</li>
                <li>Mantenimiento preventivo y correctivo</li>
              </ul>
              <a
                href="/contacto"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary rounded-md transition-colors"
              >
                Solicitar presupuesto
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Bancos de Capacitores"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 4: Filtros de Armónicas */}
      <section id="filtros" className="py-16 bg-light-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Filtros de Armónicas"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center bg-primary p-3 rounded-lg mb-6">
                <Layers size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Filtros de Armónicas</h2>
              <p className="mb-4">
                Implementamos soluciones para mitigar armónicos en su red eléctrica, mejorando la calidad de la energía 
                y protegiendo sus equipos de los efectos dañinos de las distorsiones armónicas.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Estudio y análisis de armónicos</li>
                <li>Diseño de filtros pasivos y activos</li>
                <li>Instalación de soluciones anti-armónicas</li>
                <li>Monitoreo de eficacia de filtración</li>
                <li>Mantenimiento especializado de filtros</li>
              </ul>
              <a
                href="/contacto"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary rounded-md transition-colors"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 5: Soluciones Energéticas */}
      <section id="soluciones" className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-primary p-3 rounded-lg mb-6">
                <BarChart2 size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Soluciones Energéticas Integrales</h2>
              <p className="mb-4">
                Ofrecemos servicios integrales de consultoría, diseño e implementación de soluciones 
                para optimizar el consumo energético y mejorar la eficiencia de sus instalaciones.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Auditorías energéticas completas</li>
                <li>Sistemas de monitoreo y gestión de energía</li>
                <li>Optimización de instalaciones eléctricas</li>
                <li>Proyectos de eficiencia energética</li>
                <li>Integración con energías renovables</li>
              </ul>
              <a
                href="/contacto"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary rounded-md transition-colors"
              >
                Solicitar asesoría
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Soluciones Energéticas"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas una solución personalizada?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo de ingenieros está listo para ayudarte a implementar la mejor solución para tus necesidades específicas.
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-white text-primary hover:bg-light-bg rounded-md text-lg font-semibold shadow-md transition-all duration-300"
          >
            Contáctanos ahora
          </a>
        </div>
      </section>
    </>
  );
}