import { Eye, Calendar, Building } from 'lucide-react';
import Link from 'next/link';

export default function PortafolioPage() {
  // Datos de ejemplo para proyectos
  const proyectos = [
    {
      id: 1,
      titulo: 'Optimización Energética Industrial',
      cliente: 'Empresa Manufacturera Nacional',
      categoria: 'Calidad de Energía',
      descripcion: 'Implementación de soluciones para mejorar la calidad de energía en una planta manufacturera, reduciendo armónicos y optimizando el factor de potencia.',
      fecha: 'Enero 2024',
      imagen: '/hero.jpg'
    },
    {
      id: 2,
      titulo: 'Cumplimiento de Código de Red',
      cliente: 'Grupo Comercial Mexicano',
      categoria: 'Código de Red',
      descripcion: 'Proyecto integral para asegurar el cumplimiento de las normativas de Código de Red en múltiples instalaciones comerciales distribuidas en todo el país.',
      fecha: 'Octubre 2023',
      imagen: '/hero.jpg'
    },
    {
      id: 3,
      titulo: 'Banco de Capacitores Automático',
      cliente: 'Planta Industrial Automotriz',
      categoria: 'Bancos de Capacitores',
      descripcion: 'Diseño e instalación de un sistema de bancos de capacitores automáticos para corregir el factor de potencia y reducir cargos por energía reactiva.',
      fecha: 'Julio 2023',
      imagen: '/hero.jpg'
    },
    {
      id: 4,
      titulo: 'Filtración de Armónicos',
      cliente: 'Centro de Datos',
      categoria: 'Filtros de Armónicas',
      descripcion: 'Implementación de filtros de armónicos para proteger equipos sensibles y mejorar la calidad de energía en un centro de datos crítico.',
      fecha: 'Mayo 2023',
      imagen: '/hero.jpg'
    },
    {
      id: 5,
      titulo: 'Auditoría Energética Completa',
      cliente: 'Cadena Hotelera',
      categoria: 'Soluciones Energéticas',
      descripcion: 'Auditoría energética exhaustiva y plan de optimización para una cadena de hoteles, identificando oportunidades de ahorro y mejora en la eficiencia.',
      fecha: 'Marzo 2023',
      imagen: '/hero.jpg'
    },
    {
      id: 6,
      titulo: 'Monitoreo y Control Remoto',
      cliente: 'Empresa de Alimentos',
      categoria: 'Soluciones Energéticas',
      descripcion: 'Instalación de un sistema de monitoreo y control remoto para la gestión eficiente del consumo energético en procesos de producción de alimentos.',
      fecha: 'Diciembre 2022',
      imagen: '/hero.jpg'
    },
  ];

  // Categorías para el filtrado
  const categorias = [
    'Todos',
    'Calidad de Energía',
    'Código de Red',
    'Bancos de Capacitores',
    'Filtros de Armónicas',
    'Soluciones Energéticas'
  ];

  return (
    <>
      {/* Cabecera del portafolio */}
      <section className="bg-light-bg py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Nuestro Portafolio</h1>
            <p className="text-lg">
              Conoce algunos de nuestros proyectos más destacados, donde implementamos soluciones efectivas 
              para mejorar la calidad de la energía eléctrica y optimizar el consumo energético.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de categorías */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md transition-colors ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-primary hover:text-white text-gray-700'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cuadrícula de proyectos */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md border border-primary/10 transition-transform hover:translate-y-[-5px]">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-3">
                    {proyecto.categoria}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-dark">{proyecto.titulo}</h3>
                  <p className="text-sm text-gray-700 mb-4">{proyecto.descripcion}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Building size={16} className="text-primary" />
                      <span className="text-sm text-gray-700">{proyecto.cliente}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm text-gray-700">{proyecto.fecha}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/portafolio/${proyecto.id}`} 
                    className="mt-4 flex items-center gap-2 text-primary hover:text-secondary"
                  >
                    <Eye size={16} />
                    <span>Ver detalles</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center mt-8">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Permítenos ayudarte a optimizar tus instalaciones eléctricas y mejorar la eficiencia energética de tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-white text-primary hover:bg-light-bg rounded-md text-lg font-semibold shadow-md transition-all duration-300"
          >
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}

