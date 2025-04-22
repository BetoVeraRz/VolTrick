'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">⚡ Energía Eficiente</h1>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link href="/">Inicio</Link>
          <Link href="/objetivo">Objetivo</Link>
          <Link href="/valores">Valores</Link>
          <Link href="/mision">Misión</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/clientes">Clientes</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}