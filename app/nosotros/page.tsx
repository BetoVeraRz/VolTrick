import { Users, Target, BookOpen, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <>
      {/* Cabecera de Nosotros */}
      <section className="bg-light-bg py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-lg">
              Voltrik es una empresa mexicana especializada en soluciones de calidad de energía eléctrica y servicios profesionales para la industria.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Nuestra Historia</h2>
              <p className="mb-4">
                Fundada en 2015, Voltrik nació con la misión de proporcionar soluciones efectivas para los problemas de calidad de energía que afectan a las empresas mexicanas.
              </p>
              <p className="mb-4">
                Lo que comenzó como una pequeña consultoría ha crecido hasta convertirse en un referente en el sector de la ingeniería eléctrica especializada, 
                atendiendo proyectos para grandes industrias y organizaciones a lo largo del país.
              </p>
              <p>
                Nuestro equipo de ingenieros altamente capacitados combina conocimientos técnicos avanzados con una comprensión profunda 
                de las necesidades específicas del mercado mexicano, permitiéndonos ofrecer soluciones a medida y efectivas.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Historia de Voltrik"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Misión, Visión y Valores</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-primary/10 p-8 rounded-lg shadow-md border border-primary/20">
              <div className="inline-flex items-center justify-center bg-primary w-12 h-12 rounded-full mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark">Misión</h3>
              <p className="text-gray-700">
                Ofrecer soluciones energéticas innovadoras y de alta calidad que mejoren la eficiencia, 
                reduzcan costos y optimicen el funcionamiento de las instalaciones eléctricas de nuestros clientes.
              </p>
            </div>
            
            {/* Visión */}
            <div className="bg-primary/10 p-8 rounded-lg shadow-md border border-primary/20">
              <div className="inline-flex items-center justify-center bg-primary w-12 h-12 rounded-full mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark">Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como líderes en soluciones de calidad de energía en México, 
                destacándonos por nuestra excelencia técnica, innovación constante y compromiso con la sostenibilidad.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-primary/10 p-8 rounded-lg shadow-md border border-primary/20">
              <div className="inline-flex items-center justify-center bg-primary w-12 h-12 rounded-full mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark">Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span><strong>Excelencia:</strong> en cada proyecto que emprendemos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span><strong>Integridad:</strong> transparencia en todas nuestras acciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span><strong>Innovación:</strong> buscando continuamente mejores soluciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span><strong>Compromiso:</strong> con el cliente y el medio ambiente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro equipo */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector 
              eléctrico y energético.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Miembro 1 */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 mx-auto w-48 h-48">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Juan Pérez</h3>
              <p className="text-primary">Director General</p>
            </div>
            
            {/* Miembro 2 */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 mx-auto w-48 h-48">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">María González</h3>
              <p className="text-primary">Ingeniera Principal</p>
            </div>
            
            {/* Miembro 3 */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 mx-auto w-48 h-48">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Carlos Rodríguez</h3>
              <p className="text-primary">Consultor Técnico</p>
            </div>
            
            {/* Miembro 4 */}
            <div className="text-center">
              <div className="rounded-lg overflow-hidden shadow-md mb-4 mx-auto w-48 h-48">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Laura Hernández</h3>
              <p className="text-primary">Directora de Proyectos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">Trabajemos juntos</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Permítenos ayudarte a optimizar tu instalación eléctrica y mejorar la calidad de tu energía.
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