'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard, Shield, Truck } from 'lucide-react'

// Mock data do carrinho
const initialCartItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 9999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&q=80',
    quantity: 1,
    category: 'iPhone'
  },
  {
    id: 2,
    name: 'AirPods Pro 2',
    price: 2499,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=300&q=80',
    quantity: 2,
    category: 'Audio'
  }
]

export default function CarrinhoPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState('')
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'bumpi10') {
      setIsPromoApplied(true)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0)
  const discount = isPromoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal >= 50000 ? 0 : 1500 // Frete grátis acima de R$ 500
  const total = subtotal - discount + shipping

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <ShoppingBag className="w-20 h-20 text-purple-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-400 mb-8">
              Que tal dar uma olhada em nossos produtos incríveis?
            </p>
            <Link href="/produtos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
              >
                Ver Produtos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Seu <span className="bg-gradient-to-r from-white to-purple-primary bg-clip-text text-transparent">Carrinho</span>
              </h1>
              <p className="text-xl text-gray-200">
                Finalize sua compra e receba em casa
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Itens no Carrinho ({cartItems.length})</h2>
                <Link href="/produtos" className="flex items-center space-x-2 text-purple-primary hover:text-purple-dark transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continuar Comprando</span>
                </Link>
              </div>

              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-gray-900 to-black border border-purple-primary/20 rounded-xl p-6 hover:border-purple-primary/50 transition-all"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      {/* Product Image */}
                      <div className="relative w-32 h-32 bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="mb-2">
                          <span className="text-purple-primary text-sm font-medium">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                          <span className="text-lg font-bold text-white">{formatPrice(item.price)}</span>
                          <span className="text-sm text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                          <div className="flex items-center border border-gray-700 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-400 hover:text-white transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-400 hover:text-white transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-center md:text-right">
                        <p className="text-2xl font-bold text-white">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-gray-400">
                          Economia: {formatPrice((item.originalPrice - item.price) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-96"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Código Promocional
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Digite seu cupom"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      disabled={isPromoApplied}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        isPromoApplied
                          ? 'bg-green-600 text-white cursor-not-allowed'
                          : 'bg-purple-primary text-white hover:bg-purple-dark'
                      }`}
                    >
                      {isPromoApplied ? '✓' : 'Aplicar'}
                    </button>
                  </div>
                  {isPromoApplied && (
                    <p className="text-green-400 text-sm mt-1">Cupom BUMPI10 aplicado! 10% de desconto</p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Economia:</span>
                      <span>-{formatPrice(savings)}</span>
                    </div>
                  )}
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Desconto (BUMPI10):</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-400">
                    <span>Frete:</span>
                    <span>{shipping === 0 ? 'Grátis' : formatPrice(shipping)}</span>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total:</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-purple-primary/10 border border-purple-primary/20 rounded-lg p-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Shield className="w-4 h-4 text-purple-primary" />
                      <span className="text-gray-300">Compra 100% segura</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Truck className="w-4 h-4 text-purple-primary" />
                      <span className="text-gray-300">Entrega em 2-5 dias úteis</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CreditCard className="w-4 h-4 text-purple-primary" />
                      <span className="text-gray-300">Parcelamento sem juros</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-purple text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all mb-4"
                >
                  Finalizar Compra
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  Ao finalizar a compra, você concorda com nossos{' '}
                  <Link href="/termos" className="text-purple-primary hover:underline">
                    Termos de Uso
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Você também pode gostar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-4 hover:border-purple-primary/50 transition-all">
                  <div className="aspect-square bg-gray-800 rounded-lg mb-4"></div>
                  <h3 className="text-white font-medium mb-2">Produto Relacionado {item}</h3>
                  <p className="text-purple-primary font-bold">R$ 999</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  )
}
