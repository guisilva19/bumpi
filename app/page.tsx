'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 'R$ 9.999',
    originalPrice: 'R$ 10.999',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
    rating: 4.9,
    category: 'iPhone'
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 'R$ 15.999',
    originalPrice: 'R$ 17.999',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80',
    rating: 4.8,
    category: 'MacBook'
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 'R$ 2.499',
    originalPrice: 'R$ 2.799',
    image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=500&q=80',
    rating: 4.7,
    category: 'Audio'
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 'R$ 7.999',
    originalPrice: 'R$ 8.999',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
    rating: 4.8,
    category: 'iPad'
  }
]


export default function HomePage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative lg:min-h-screen min-h-[90dvh] flex items-center justify-center overflow-hidden">
        {/* Background with improved gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 via-transparent to-purple-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
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

        <div className="relative z-10 w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-purple text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🚀 Lançamento Especial
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-white">Tecnologia</span>
                <span className="block bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent">
                  Premium
                </span>
                <span className="block text-white">ao Seu Alcance</span>
              </h1>
              
              <p className="hidden md:block text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                Descubra os produtos Apple mais recentes e equipamentos de áudio visual de alta qualidade. 
                Experiência premium com garantia e suporte especializado.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Link href="/produtos">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-purple text-white px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-purple-primary/25 transition-all"
                  >
                    <span>Explorar Produtos</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="lg:flex hidden border-2 border-purple-primary text-purple-primary px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg hover:bg-purple-primary hover:text-white transition-all"
                >
                  Ver Ofertas
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-gray-400">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-gray-400">Avaliação</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Product Image */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-purple-primary/30 flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"
                      alt="iPhone 15 Pro Max"
                      width={300}
                      height={300}
                      className="object-cover rounded-2xl w-full h-full"
                    />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-8 sm:top-12 -left-4 sm:-left-8 bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-2xl p-2 sm:p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-white font-semibold text-sm">Em Estoque</div>
                      <div className="text-gray-400 text-xs">Entrega rápida</div>
                    </div>
                    <div className="sm:hidden text-white font-semibold text-xs">✓</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-16 sm:bottom-12 -right-4 sm:-right-8 bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-2xl p-2 sm:p-4 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="text-purple-primary font-bold text-sm sm:text-lg">-15%</div>
                    <div className="text-white text-xs sm:text-sm">Oferta Especial</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-purple-primary rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-purple-primary rounded-full mt-2" 
            />
          </div>
        </motion.div>
      </section>


      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Produtos em <span className="bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent">Destaque</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Os melhores produtos com ofertas especiais para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl overflow-hidden hover:border-purple-primary/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-purple-primary text-white px-2 py-1 rounded-full text-sm font-medium">
                    -{Math.round(((parseFloat(product.originalPrice.replace('R$ ', '').replace('.', '')) - parseFloat(product.price.replace('R$ ', '').replace('.', ''))) / parseFloat(product.originalPrice.replace('R$ ', '').replace('.', ''))) * 100)}%
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-primary text-sm font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>

                  <Link href={`/produtos/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-purple text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Comprar Agora</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/produtos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-purple-primary text-purple-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-primary hover:text-white transition-all"
              >
                Ver Todos os Produtos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para Experimentar o Futuro?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Junte-se a milhares de clientes satisfeitos que já descobriram a diferença da tecnologia premium.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/produtos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  Comprar Agora
                </motion.button>
              </Link>
              <Link href="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
                >
                  Falar Conosco
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
