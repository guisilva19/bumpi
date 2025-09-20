'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { User, Lock, Eye, EyeOff, Mail, Phone, MapPin, Heart, ShoppingBag, Clock, CreditCard } from 'lucide-react'

// Mock data do usuário
const mockUserData = {
  name: 'João Silva',
  email: 'joao@email.com',
  phone: '(11) 99999-9999',
  address: {
    street: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  },
  orders: [
    {
      id: 1,
      date: '2024-01-15',
      total: 9999,
      status: 'Entregue',
      items: 'iPhone 15 Pro Max'
    },
    {
      id: 2,
      date: '2024-01-10',
      total: 2499,
      status: 'Em trânsito',
      items: 'AirPods Pro 2'
    }
  ],
  wishlist: [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&q=80'
    }
  ]
}

export default function ContaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de login - em uma aplicação real, isso seria validado no backend
    setIsLoggedIn(true)
  }

  const handleGoogleLogin = () => {
    // Simulação de login com Google
    setIsLoggedIn(true)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // Tela de Login
  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="min-h-screen bg-black flex items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full mx-auto px-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  {isRegistering ? 'Criar Conta' : 'Entrar na sua Conta'}
                </h1>
                <p className="text-gray-400">
                  {isRegistering ? 'Junte-se à BUMPI IMPORTS' : 'Acesse sua conta para continuar'}
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {isRegistering && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isRegistering && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Confirmar Senha
                    </label>
                    <input
                      type="password"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  {isRegistering ? 'Criar Conta' : 'Entrar'}
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-700"></div>
                <span className="px-4 text-gray-400 text-sm">ou</span>
                <div className="flex-1 border-t border-gray-700"></div>
              </div>

              {/* Google Login */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoogleLogin}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continuar com Google</span>
              </motion.button>

              {/* Toggle Login/Register */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  {isRegistering ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}{' '}
                  <button
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-purple-primary hover:text-purple-dark transition-colors font-medium"
                  >
                    {isRegistering ? 'Fazer Login' : 'Criar Conta'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    )
  }

  // Área da Conta do Usuário
  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <section className="bg-gradient-primary py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-center"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Olá, {mockUserData.name}!
                </h1>
                <p className="text-gray-200">Gerencie sua conta e acompanhe seus pedidos</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
              >
                Sair
              </button>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700">
            {[
              { id: 'profile', label: 'Perfil', icon: User },
              { id: 'orders', label: 'Pedidos', icon: ShoppingBag },
              { id: 'wishlist', label: 'Lista de Desejos', icon: Heart },
              { id: 'address', label: 'Endereços', icon: MapPin }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-t-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-primary text-white border-b-2 border-purple-primary'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-purple-primary/20 rounded-xl p-8"
          >
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Informações Pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      defaultValue={mockUserData.name}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={mockUserData.email}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                    <input
                      type="tel"
                      defaultValue={mockUserData.phone}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Data de Nascimento</label>
                    <input
                      type="date"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-primary"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button className="bg-gradient-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Meus Pedidos</h2>
                <div className="space-y-4">
                  {mockUserData.orders.map((order) => (
                    <div key={order.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Pedido #{order.id}</h3>
                          <p className="text-gray-400 text-sm">Data: {new Date(order.date).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'Entregue'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">{order.items}</p>
                        <p className="text-xl font-bold text-white">{formatPrice(order.total)}</p>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <Link href={`/produtos/${order.id}`}>
                          <button className="text-purple-primary hover:text-purple-dark transition-colors">
                            Ver Detalhes
                          </button>
                        </Link>
                        {order.status !== 'Entregue' && (
                          <button className="text-red-400 hover:text-red-300 transition-colors">
                            Cancelar Pedido
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Lista de Desejos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockUserData.wishlist.map((item) => (
                    <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                      <p className="text-purple-primary font-bold mb-4">{formatPrice(item.price)}</p>
                      <div className="flex space-x-2">
                        <Link href={`/produtos/${item.id}`} className="flex-1">
                          <button className="w-full bg-gradient-purple text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all">
                            Ver Produto
                          </button>
                        </Link>
                        <button className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-all">
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'address' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Endereços</h2>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-white">Endereço Principal</h3>
                    <button className="text-purple-primary hover:text-purple-dark transition-colors">
                      Editar
                    </button>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>{mockUserData.address.street}</p>
                    <p>{mockUserData.address.city}, {mockUserData.address.state}</p>
                    <p>CEP: {mockUserData.address.zipCode}</p>
                  </div>
                </div>
                <button className="bg-gradient-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Adicionar Novo Endereço
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
