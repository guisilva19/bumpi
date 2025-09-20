import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BUMPI IMPORTS - Tecnologia Premium ao Seu Alcance',
  description: 'E-commerce especializado em produtos Apple e áudio visual. Tecnologia premium ao seu alcance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
