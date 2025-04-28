'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Zap size={24} className="text-orange-500" strokeWidth={2.5} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-orange-500 font-extrabold">Vol</span>
            <span className="text-gray-800 dark:text-white font-bold">trik</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link 
            href="/contacto" 
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Contáctanos
          </Link>
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300" 
            aria-controls="navbar-sticky" 
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Abrir menú principal</span>
            {menuOpen ? 
              <X size={20} className="text-white" aria-hidden="true" /> : 
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            }
          </button>
        </div>
        <div 
          className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} 
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map(link => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    typeof window !== 'undefined' && window.location.pathname === link.href
                    ? 'text-orange-500 bg-transparent md:text-orange-500' 
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                  aria-current={typeof window !== 'undefined' && window.location.pathname === link.href ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
