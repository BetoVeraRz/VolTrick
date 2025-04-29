import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="dark:bg-gray-900 border-t border-muted">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo e información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Vol</span>
              <span className="text-dark">trik</span>
            </h3>
            <p className="text-sm">
              Somos especialistas en calidad de energía, cumplimiento del Código de Red, bancos de capacitores, filtros de armónicas y soluciones energéticas para la industria.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-dark hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-dark hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-dark hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-dark hover:text-primary transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-dark hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-bold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#calidad" className="text-dark hover:text-primary transition-colors">
                  Calidad de Energía
                </Link>
              </li>
              <li>
                <Link href="/servicios#codigo-red" className="text-dark hover:text-primary transition-colors">
                  Cumplimiento Código de Red
                </Link>
              </li>
              <li>
                <Link href="/servicios#capacitores" className="text-dark hover:text-primary transition-colors">
                  Bancos de Capacitores
                </Link>
              </li>
              <li>
                <Link href="/servicios#filtros" className="text-dark hover:text-primary transition-colors">
                  Filtros de Armónicas
                </Link>
              </li>
              <li>
                <Link href="/servicios#soluciones" className="text-dark hover:text-primary transition-colors">
                  Soluciones Energéticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>(55) 1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>info@voltrik.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Zapopan, Jalisco</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Voltrik | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}