import { Users, Target, BookOpen, Award, Briefcase, TrendingUp, CheckCircle, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <>
      {/* Cabecera de Nosotros */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 md:py-20 relative overflow-hidden">
        <div className="container-custom pt-15">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Sobre Nosotros</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Voltrik es una empresa mexicana especializada en soluciones de calidad de energía eléctrica y servicios profesionales para la industria.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-8"></div>
          </div>
        </div>
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </section>

      {/* Nuestra historia */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-orange-100 p-3 rounded-lg mb-6">
                <Briefcase size={28} className="text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Fundada en 2015, Voltrik nació con la misión de proporcionar soluciones efectivas para los problemas de calidad de energía que afectan a las empresas mexicanas.
              </p>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Lo que comenzó como una pequeña consultoría ha crecido hasta convertirse en un referente en el sector de la ingeniería eléctrica especializada, 
                atendiendo proyectos para grandes industrias y organizaciones a lo largo del país.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo de ingenieros altamente capacitados combina conocimientos técnicos avanzados con una comprensión profunda 
                de las necesidades específicas del mercado mexicano, permitiéndonos ofrecer soluciones a medida y efectivas.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">+500</p>
                    <p className="text-sm text-gray-600">Proyectos completados</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Coffee className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">10 años</p>
                    <p className="text-sm text-gray-600">De experiencia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/hero.jpg"
                alt="Historia de Voltrik"
                className="w-full h-auto hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Misión, Visión y Valores</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              En Voltrik nos guiamos por principios claros para brindar el mejor servicio
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Misión */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <Target size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecer soluciones energéticas innovadoras y de alta calidad que mejoren la eficiencia, 
                reduzcan costos y optimicen el funcionamiento de las instalaciones eléctricas de nuestros clientes.
              </p>
            </div>
            
            {/* Visión */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <BookOpen size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como líderes en soluciones de calidad de energía en México, 
                destacándonos por nuestra excelencia técnica, innovación constante y compromiso con la sostenibilidad.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
                <Award size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Excelencia</strong> en cada proyecto que emprendemos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Integridad</strong> y transparencia en todas nuestras acciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Innovación</strong> buscando continuamente mejores soluciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Compromiso</strong> con el cliente y el medio ambiente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Elemento decorativo */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-orange-100 opacity-50"></div>
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-orange-100 opacity-40"></div>
      </section>

      {/* Nuestro equipo */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nuestro Equipo</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el sector 
              eléctrico y energético.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Miembro 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="rounded-full overflow-hidden shadow-md mb-6 mx-auto w-32 h-32 border-2 border-orange-100">
                <div className="w-full h-full bg-orange-50 flex items-center justify-center">
                  <Users size={48} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Juan Pérez</h3>
              <p className="text-orange-600 font-medium mb-3">Director General</p>
              <p className="text-sm text-gray-600">Más de 15 años de experiencia en el sector energético e ingeniería eléctrica.</p>
            </div>
            
            {/* Miembro 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="rounded-full overflow-hidden shadow-md mb-6 mx-auto w-32 h-32 border-2 border-orange-100">
                <div className="w-full h-full bg-orange-50 flex items-center justify-center">
                  <Users size={48} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">María González</h3>
              <p className="text-orange-600 font-medium mb-3">Ingeniera Principal</p>
              <p className="text-sm text-gray-600">Especialista en calidad de energía y análisis de sistemas eléctricos complejos.</p>
            </div>
            
            {/* Miembro 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="rounded-full overflow-hidden shadow-md mb-6 mx-auto w-32 h-32 border-2 border-orange-100">
                <div className="w-full h-full bg-orange-50 flex items-center justify-center">
                  <Users size={48} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Carlos Rodríguez</h3>
              <p className="text-orange-600 font-medium mb-3">Consultor Técnico</p>
              <p className="text-sm text-gray-600">Experto en cumplimiento de Código de Red y normativas eléctricas.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Trabajemos juntos
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto opacity-90">
            Permítenos ayudarte a optimizar tu instalación eléctrica y mejorar la calidad de tu energía.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 rounded-md text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl group"
          >
            Contáctenos ahora
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
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