'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-dark border-t border-purple-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent">
              BUMPI IMPORTS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tecnologia premium ao seu alcance. Especialistas em produtos Apple e áudio visual de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Início
              </Link>
              <Link href="/produtos" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Produtos
              </Link>
              <Link href="/sobre" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link href="/contato" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Contato
              </Link>
              <Link href="/conta" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Minha Conta
              </Link>
            </div>
          </motion.div>

          {/* Categorias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Categorias</h4>
            <div className="space-y-2">
              <Link href="/produtos?categoria=iphone" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                iPhones
              </Link>
              <Link href="/produtos?categoria=macbook" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                MacBooks
              </Link>
              <Link href="/produtos?categoria=ipad" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                iPads
              </Link>
              <Link href="/produtos?categoria=audio" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Áudio
              </Link>
              <Link href="/produtos?categoria=acessorios" className="block text-gray-400 hover:text-purple-primary transition-colors text-sm">
                Acessórios
              </Link>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-primary" />
                <span className="text-gray-400 text-sm">contato@bumpiimports.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-primary" />
                <span className="text-gray-400 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-primary" />
                <span className="text-gray-400 text-sm">São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-purple-primary/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 BUMPI IMPORTS. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
