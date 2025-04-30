import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo e información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-orange-500">Vol</span>
              <span className="text-white">trik</span>
            </h3>
            <p className="text-sm text-gray-300">
              Somos especialistas en calidad de energía, cumplimiento del Código de Red, bancos de capacitores, filtros de armónicas y soluciones energéticas para la industria.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-orange-500 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#calidad" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Calidad de Energía
                </Link>
              </li>
              <li>
                <Link href="/servicios#codigo-red" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Cumplimiento Código de Red
                </Link>
              </li>
              <li>
                <Link href="/servicios#capacitores" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Bancos de Capacitores
                </Link>
              </li>
              <li>
                <Link href="/servicios#filtros" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Filtros de Armónicas
                </Link>
              </li>
              <li>
                <Link href="/servicios#soluciones" className="text-orange-500 hover:text-white transition-colors duration-200">
                  Soluciones Energéticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(55) 1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@voltrik.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Zapopan, Jalisco</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Voltrik | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}