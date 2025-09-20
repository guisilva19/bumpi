'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Star, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Truck, Shield, CreditCard, MessageCircle } from 'lucide-react'

// Mock data - em uma aplicação real, isso viria de uma API
const productData: { [key: string]: any } = {
  '1': {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 'R$ 9.999',
    originalPrice: 'R$ 10.999',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 1247,
    category: 'iPhone',
    inStock: true,
    stockCount: 15,
    description: 'O iPhone 15 Pro Max oferece desempenho excepcional com o chip A17 Pro, sistema de câmera profissional de última geração e design em titânio premium. Experimente a inovação em suas mãos.',
    features: [
      'Chip A17 Pro de última geração',
      'Sistema de câmera tripla 48MP',
      'Tela Super Retina XDR de 6,7"',
      'Design em titânio premium',
      'Bateria para o dia todo',
      'iOS 17 com recursos exclusivos'
    ],
    specifications: {
      'Tela': '6,7" Super Retina XDR',
      'Processador': 'Chip A17 Pro',
      'Armazenamento': '256GB',
      'Câmera': '48MP + 12MP + 12MP',
      'Bateria': 'Até 29h de vídeo',
      'Conectividade': '5G, Wi-Fi 6E, Bluetooth 5.3',
      'Dimensões': '159.9 x 76.7 x 8.25 mm',
      'Peso': '221g'
    }
  },
  '2': {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 'R$ 8.999',
    originalPrice: 'R$ 9.999',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 892,
    category: 'iPhone',
    inStock: true,
    stockCount: 12,
    description: 'iPhone 15 Pro com chip A17 Pro oferece desempenho excepcional e sistema de câmera profissional em um design compacto e elegante.',
    features: [
      'Chip A17 Pro de última geração',
      'Sistema de câmera tripla 48MP',
      'Tela Super Retina XDR de 6,1"',
      'Design em titânio premium',
      'Bateria para o dia todo',
      'iOS 17 com recursos exclusivos'
    ],
    specifications: {
      'Tela': '6,1" Super Retina XDR',
      'Processador': 'Chip A17 Pro',
      'Armazenamento': '128GB',
      'Câmera': '48MP + 12MP + 12MP',
      'Bateria': 'Até 23h de vídeo',
      'Conectividade': '5G, Wi-Fi 6E, Bluetooth 5.3',
      'Dimensões': '146.6 x 70.6 x 8.25 mm',
      'Peso': '187g'
    }
  },
  '3': {
    id: 3,
    name: 'MacBook Pro 16"',
    price: 'R$ 15.999',
    originalPrice: 'R$ 17.999',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 892,
    category: 'MacBook',
    inStock: true,
    stockCount: 8,
    description: 'MacBook Pro com chip M3 Pro oferece desempenho profissional excepcional para criadores de conteúdo, desenvolvedores e profissionais exigentes.',
    features: [
      'Chip Apple M3 Pro',
      'Tela Liquid Retina XDR 16"',
      'Até 22 horas de bateria',
      'Sistema de som de 6 alto-falantes',
      'Múltiplas portas Thunderbolt 4',
      'Câmera FaceTime HD 1080p'
    ],
    specifications: {
      'Tela': '16" Liquid Retina XDR',
      'Processador': 'Apple M3 Pro',
      'Memória': '18GB RAM unificada',
      'Armazenamento': '512GB SSD',
      'Gráficos': 'GPU 18-core',
      'Conectividade': 'Wi-Fi 6E, Bluetooth 5.3',
      'Dimensões': '35.57 x 24.81 x 1.68 cm',
      'Peso': '2.16 kg'
    }
  },
  '4': {
    id: 4,
    name: 'MacBook Air M2',
    price: 'R$ 9.999',
    originalPrice: 'R$ 10.999',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 654,
    category: 'MacBook',
    inStock: true,
    stockCount: 15,
    description: 'MacBook Air com chip M2 oferece desempenho impressionante em um design ultrafino e leve, perfeito para produtividade e criatividade.',
    features: [
      'Chip Apple M2',
      'Tela Liquid Retina 13,6"',
      'Até 18 horas de bateria',
      'Design ultrafino e leve',
      'Portas Thunderbolt 4',
      'Câmera FaceTime HD 1080p'
    ],
    specifications: {
      'Tela': '13,6" Liquid Retina',
      'Processador': 'Apple M2',
      'Memória': '8GB RAM unificada',
      'Armazenamento': '256GB SSD',
      'Gráficos': 'GPU 8-core',
      'Conectividade': 'Wi-Fi 6, Bluetooth 5.0',
      'Dimensões': '30.41 x 21.5 x 1.13 cm',
      'Peso': '1.24 kg'
    }
  },
  '5': {
    id: 5,
    name: 'AirPods Pro 2',
    price: 'R$ 2.499',
    originalPrice: 'R$ 2.799',
    images: [
      'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=800&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 1234,
    category: 'Audio',
    inStock: true,
    stockCount: 25,
    description: 'AirPods Pro 2 com cancelamento ativo de ruído e áudio espacial personalizado para uma experiência de áudio imersiva.',
    features: [
      'Cancelamento ativo de ruído',
      'Áudio espacial personalizado',
      'Chip H2 para áudio superior',
      'Até 6h de áudio contínuo',
      'Case com carregamento MagSafe',
      'Resistência à água e suor'
    ],
    specifications: {
      'Drivers': 'Driver dinâmico personalizado',
      'Chip': 'H2',
      'Bateria': 'Até 6h (fones) + 24h (case)',
      'Conectividade': 'Bluetooth 5.3',
      'Resistência': 'IPX4',
      'Controles': 'Toque e pressão',
      'Compatibilidade': 'iOS 16+',
      'Peso': '5.3g (cada fone)'
    }
  },
  '6': {
    id: 6,
    name: 'AirPods Max',
    price: 'R$ 4.999',
    originalPrice: 'R$ 5.499',
    images: [
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80',
      'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 567,
    category: 'Audio',
    inStock: false,
    stockCount: 0,
    description: 'AirPods Max oferece áudio de alta fidelidade com cancelamento ativo de ruído e design premium em alumínio.',
    features: [
      'Cancelamento ativo de ruído',
      'Áudio espacial personalizado',
      'Drivers dinâmicos de 40mm',
      'Até 20h de áudio contínuo',
      'Design em alumínio anodizado',
      'Controles digitais'
    ],
    specifications: {
      'Drivers': '40mm dinâmicos',
      'Chip': 'H1',
      'Bateria': 'Até 20h de áudio',
      'Conectividade': 'Bluetooth 5.0',
      'Resistência': 'Não especificada',
      'Controles': 'Digital Crown',
      'Compatibilidade': 'iOS 14+',
      'Peso': '384g'
    }
  },
  '7': {
    id: 7,
    name: 'iPad Pro 12.9"',
    price: 'R$ 7.999',
    originalPrice: 'R$ 8.999',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 789,
    category: 'iPad',
    inStock: true,
    stockCount: 10,
    description: 'iPad Pro 12.9" com chip M2 oferece desempenho profissional e tela Liquid Retina XDR para criadores e profissionais.',
    features: [
      'Chip Apple M2',
      'Tela Liquid Retina XDR 12.9"',
      'Suporte para Apple Pencil 2',
      'Câmera Pro de 12MP',
      'Conectividade 5G',
      'Thunderbolt 4'
    ],
    specifications: {
      'Tela': '12.9" Liquid Retina XDR',
      'Processador': 'Apple M2',
      'Memória': '8GB RAM',
      'Armazenamento': '128GB',
      'Câmera': '12MP + 10MP',
      'Conectividade': '5G, Wi-Fi 6E',
      'Dimensões': '28.06 x 21.49 x 0.64 cm',
      'Peso': '682g'
    }
  },
  '8': {
    id: 8,
    name: 'iPad Air',
    price: 'R$ 4.999',
    originalPrice: 'R$ 5.499',
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 456,
    category: 'iPad',
    inStock: true,
    stockCount: 18,
    description: 'iPad Air com chip M1 oferece desempenho impressionante em um design elegante e versátil para trabalho e diversão.',
    features: [
      'Chip Apple M1',
      'Tela Liquid Retina 10.9"',
      'Suporte para Apple Pencil 2',
      'Câmera de 12MP',
      'Touch ID',
      'Conectividade 5G'
    ],
    specifications: {
      'Tela': '10.9" Liquid Retina',
      'Processador': 'Apple M1',
      'Memória': '8GB RAM',
      'Armazenamento': '64GB',
      'Câmera': '12MP',
      'Conectividade': '5G, Wi-Fi 6',
      'Dimensões': '24.76 x 17.85 x 0.61 cm',
      'Peso': '461g'
    }
  }
}

export default function ProdutoPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[productId]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Produto não encontrado</h1>
            <Link href="/produtos" className="text-purple-primary hover:underline">
              Voltar aos produtos
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Breadcrumb */}
        <div className="bg-gray-900/50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Início
              </Link>
              <span className="text-gray-600">/</span>
              <Link href="/produtos" className="text-gray-400 hover:text-white transition-colors">
                Produtos
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-purple-primary">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-purple-primary/20">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Stock Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {product.inStock ? `${product.stockCount} em estoque` : 'Esgotado'}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{Math.round(((parseFloat(product.originalPrice.replace('R$ ', '').replace('.', '')) - parseFloat(product.price.replace('R$ ', '').replace('.', ''))) / parseFloat(product.originalPrice.replace('R$ ', '').replace('.', ''))) * 100)}%
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-4 overflow-x-auto">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-purple-primary'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-purple-primary font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviewCount} avaliações)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Principais características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-purple-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Actions */}
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <label className="text-gray-400">Quantidade:</label>
                    <div className="flex items-center border border-gray-700 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                        className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    disabled={!product.inStock}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all ${
                      product.inStock
                        ? 'bg-gradient-purple text-white hover:shadow-lg'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.inStock ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}</span>
                  </button>

                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-4 border rounded-lg transition-all ${
                      isWishlisted
                        ? 'border-red-500 text-red-500 bg-red-500/10'
                        : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  <button className="p-4 border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white rounded-lg transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-purple-primary" />
                    <div>
                      <p className="text-sm font-medium text-white">Frete Grátis</p>
                      <p className="text-xs text-gray-400">Acima de R$ 500</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-primary" />
                    <div>
                      <p className="text-sm font-medium text-white">Garantia</p>
                      <p className="text-xs text-gray-400">12 meses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-purple-primary" />
                    <div>
                      <p className="text-sm font-medium text-white">Parcelamento</p>
                      <p className="text-xs text-gray-400">12x sem juros</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Especificações Técnicas</h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-400 font-medium">{key}:</span>
                    <span className="text-white">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact Support */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-primary rounded-xl p-8">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Dúvidas sobre o produto?</h3>
              <p className="text-gray-200 mb-6">
                Nossa equipe especializada está pronta para te ajudar com todas as informações que você precisa.
              </p>
              <Link href="/contato">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Falar com Especialista
                </button>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  )
}
