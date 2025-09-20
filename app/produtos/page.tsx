'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Star, ShoppingCart, Filter, Grid, List, Search } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 'R$ 9.999',
    originalPrice: 'R$ 10.999',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
    rating: 4.9,
    category: 'iPhone',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 'R$ 8.999',
    originalPrice: 'R$ 9.999',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    rating: 4.8,
    category: 'iPhone',
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    price: 'R$ 15.999',
    originalPrice: 'R$ 17.999',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80',
    rating: 4.8,
    category: 'MacBook',
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'MacBook Air M2',
    price: 'R$ 9.999',
    originalPrice: 'R$ 10.999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 4.7,
    category: 'MacBook',
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: 'AirPods Pro 2',
    price: 'R$ 2.499',
    originalPrice: 'R$ 2.799',
    image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=500&q=80',
    rating: 4.7,
    category: 'Audio',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'AirPods Max',
    price: 'R$ 4.999',
    originalPrice: 'R$ 5.499',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80',
    rating: 4.6,
    category: 'Audio',
    inStock: false,
    featured: false
  },
  {
    id: 7,
    name: 'iPad Pro 12.9"',
    price: 'R$ 7.999',
    originalPrice: 'R$ 8.999',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
    rating: 4.8,
    category: 'iPad',
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: 'iPad Air',
    price: 'R$ 4.999',
    originalPrice: 'R$ 5.499',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
    rating: 4.6,
    category: 'iPad',
    inStock: true,
    featured: false
  }
]

const categories = [
  { id: 'all', name: 'Todos', count: products.length },
  { id: 'iPhone', name: 'iPhones', count: products.filter(p => p.category === 'iPhone').length },
  { id: 'MacBook', name: 'MacBooks', count: products.filter(p => p.category === 'MacBook').length },
  { id: 'iPad', name: 'iPads', count: products.filter(p => p.category === 'iPad').length },
  { id: 'Audio', name: 'Audio', count: products.filter(p => p.category === 'Audio').length },
]

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('R$ ', '').replace('.', '')) - parseFloat(b.price.replace('R$ ', '').replace('.', ''))
        case 'price-high':
          return parseFloat(b.price.replace('R$ ', '').replace('.', '')) - parseFloat(a.price.replace('R$ ', '').replace('.', ''))
        case 'name':
          return a.name.localeCompare(b.name)
        case 'rating':
          return b.rating - a.rating
        default:
          return b.featured ? 1 : -1
      }
    })

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nossos <span className="bg-gradient-to-r from-purple-primary to-purple-dark bg-clip-text text-transparent">Produtos</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Descubra nossa seleção completa de produtos Apple e áudio visual premium
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-purple-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-primary/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-900 border border-purple-primary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-primary"
                >
                  <option value="featured">Destacados</option>
                  <option value="name">Nome</option>
                  <option value="price-low">Menor Preço</option>
                  <option value="price-high">Maior Preço</option>
                  <option value="rating">Avaliação</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-purple-primary/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-purple-primary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-purple-primary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <aside className="w-full lg:w-64">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-purple-primary" />
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-primary text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid/List */}
            <main className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-400">
                  Mostrando {filteredProducts.length} de {products.length} produtos
                </p>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
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
                        <div className="absolute top-4 left-4 flex flex-col space-y-2">
                          {product.featured && (
                            <span className="bg-purple-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                              Destaque
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Esgotado
                            </span>
                          )}
                        </div>
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
                          <button
                            disabled={!product.inStock}
                            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                              product.inStock
                                ? 'bg-gradient-purple text-white hover:shadow-lg'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>{product.inStock ? 'Comprar Agora' : 'Esgotado'}</span>
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-gray-900 to-black border border-purple-primary/20 rounded-xl overflow-hidden hover:border-purple-primary/50 transition-all"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-48 h-48">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 flex flex-col space-y-2">
                            {product.featured && (
                              <span className="bg-purple-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                                Destaque
                              </span>
                            )}
                            {!product.inStock && (
                              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Esgotado
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-purple-primary text-sm font-medium">{product.category}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-400">{product.rating}</span>
                              </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-2xl font-bold text-white">{product.price}</span>
                              <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                              <span className="bg-purple-primary text-white px-2 py-1 rounded-full text-sm font-medium">
                                -{Math.round(((parseFloat(product.originalPrice.replace('R$ ', '').replace('.', '')) - parseFloat(product.price.replace('R$ ', '').replace('.', ''))) / parseFloat(product.originalPrice.replace('R$ ', '').replace('.', ''))) * 100)}%
                              </span>
                            </div>
                          </div>

                          <Link href={`/produtos/${product.id}`}>
                            <button
                              disabled={!product.inStock}
                              className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                                product.inStock
                                  ? 'bg-gradient-purple text-white hover:shadow-lg'
                                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span>{product.inStock ? 'Comprar Agora' : 'Produto Esgotado'}</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-400 text-lg">
                    Nenhum produto encontrado para "{searchTerm}" na categoria {categories.find(c => c.id === selectedCategory)?.name}.
                  </p>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}
