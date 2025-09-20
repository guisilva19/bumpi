'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/90 backdrop-blur-md border-b border-purple-primary/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent"
            >
              BUMPI IMPORTS
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-primary transition-colors">
              Início
            </Link>
            <Link href="/produtos" className="text-white hover:text-purple-primary transition-colors">
              Produtos
            </Link>
            <Link href="/sobre" className="text-white hover:text-purple-primary transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-white hover:text-purple-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full bg-gray-900/50 border border-purple-primary/30 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/conta" className="p-2 hover:bg-purple-primary/20 rounded-lg transition-colors">
              <User className="w-5 h-5 text-white" />
            </Link>
            <Link href="/carrinho" className="p-2 hover:bg-purple-primary/20 rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-purple-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-purple-primary/20 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-purple-primary/20"
          >
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-purple-primary transition-colors">
                Início
              </Link>
              <Link href="/produtos" className="text-white hover:text-purple-primary transition-colors">
                Produtos
              </Link>
              <Link href="/sobre" className="text-white hover:text-purple-primary transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-white hover:text-purple-primary transition-colors">
                Contato
              </Link>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full bg-gray-900/50 border border-purple-primary/30 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
