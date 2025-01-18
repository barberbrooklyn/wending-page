import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import BackgroundPattern from '@/components/background-pattern'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leidy & Jhon - Nuestra Boda',
  description: 'Celebra con nosotros nuestra unión en matrimonio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${lato.className} bg-[#fdfbf7] relative`}>
        <BackgroundPattern />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

