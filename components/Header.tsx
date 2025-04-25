'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para aplicar efectos al header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 shadow-sm`}>
      <div className="container-custom mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Zap size={24} className="text-primary" strokeWidth={2.5} />
              <div className="flex items-center">
                <span className="text-primary font-extrabold">Vol</span>
                <span className="text-dark font-bold">trik</span>
              </div>
            </Link>
          </h1>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Links en pantallas medianas o más */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-dark hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/contacto" 
            className="ml-2 px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            Contáctanos
          </a>
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden px-6 py-5 space-y-5 bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-fadeIn shadow-inner">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-dark hover:text-primary text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-4">
            <a 
              href="/contacto" 
              className="inline-block w-full text-center px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
