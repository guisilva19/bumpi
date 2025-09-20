'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Home, Search, ArrowLeft, Smartphone, Laptop, Headphones } from 'lucide-react'

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-transparent to-purple-dark/10" />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-dark rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-8xl md:text-9xl font-bold">
                <span className="bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent">
                  404
                </span>
              </h1>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -left-8"
              >
                <div className="w-16 h-16 bg-gradient-purple rounded-xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-4 -right-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-purple-primary/30">
                  <Laptop className="w-6 h-6 text-purple-primary" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -left-12"
              >
                <div className="w-10 h-10 bg-purple-dark rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ops! Página não encontrada
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A página que você está procurando não existe ou foi movida. 
                Que tal dar uma olhada em nossos produtos incríveis?
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-purple text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-purple-primary/25 transition-all"
                >
                  <Home className="w-5 h-5" />
                  <span>Voltar ao Início</span>
                </motion.button>
              </Link>
              
              <Link href="/produtos">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-primary text-purple-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-primary hover:text-white transition-all flex items-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Ver Produtos</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-12"
            >
              <p className="text-gray-400 mb-4">Ou explore essas categorias:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'iPhones', href: '/produtos?categoria=iPhone' },
                  { name: 'MacBooks', href: '/produtos?categoria=MacBook' },
                  { name: 'iPads', href: '/produtos?categoria=iPad' },
                  { name: 'Audio', href: '/produtos?categoria=Audio' }
                ].map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    <Link href={category.href}>
                      <button className="bg-gray-800/50 hover:bg-purple-primary/20 border border-gray-700 hover:border-purple-primary/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all">
                        {category.name}
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-primary/10 to-transparent" />
      </div>
    </Layout>
  )
}
