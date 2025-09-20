'use client'

import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
