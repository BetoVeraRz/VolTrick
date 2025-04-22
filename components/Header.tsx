'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
          <Link href="/">Voltrik</Link>
      </h1>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links en pantallas medianas o más */}
        <nav className="hidden md:flex space-x-4 text-sm sm:text-base">
          {links.map(link => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-800">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
