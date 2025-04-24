import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Voltrik',
  description: 'Servicios de ahorro de energía y calidad eléctrica',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen px-6 py-8">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}