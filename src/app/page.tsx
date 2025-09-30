'use client'

import { useState } from 'react'
import { ShoppingBag, Smartphone, Home, Baby, Shirt, Star, Mail, Phone, Facebook, Instagram, Twitter, Zap, Sparkles, Settings } from 'lucide-react'
import Link from 'next/link'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useAdmin } from '@/contexts/AdminContext'
import EditableText from '@/components/EditableText'

export default function AffiliateLinksPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { saveCurrentPosition } = useScrollPosition()
  const { isAuthenticated, siteContent, updateSiteContent } = useAdmin()

  const marketplaces = [
    {
      name: 'Amazon',
      description: 'Milhões de produtos com entrega rápida',
      category: 'Geral',
      icon: '🛒',
      color: 'from-orange-400 to-orange-600',
      link: '/amazon'
    },
    {
      name: 'Mercado Livre',
      description: 'Marketplace líder da América Latina',
      category: 'Geral',
      icon: '🛍️',
      color: 'from-yellow-400 to-yellow-600',
      link: '/mercado-livre'
    },
    {
      name: 'Magazine Luiza',
      description: 'Tecnologia e eletrodomésticos',
      category: 'Tecnologia',
      icon: '📱',
      color: 'from-blue-400 to-blue-600',
      link: '/magazine-luiza'
    },
    {
      name: 'Americanas',
      description: 'Variedade em produtos nacionais',
      category: 'Geral',
      icon: '🏪',
      color: 'from-red-400 to-red-600',
      link: '/americanas'
    },
    {
      name: 'Shopee',
      description: 'Produtos importados com ótimos preços',
      category: 'Importados',
      icon: '🛒',
      color: 'from-orange-500 to-pink-500',
      link: '/shopee'
    },
    {
      name: 'AliExpress',
      description: 'Direto da China com frete grátis',
      category: 'Importados',
      icon: '📦',
      color: 'from-red-500 to-orange-500',
      link: '/aliexpress'
    }
  ]

  const categories = [
    { name: 'Tecnologia', icon: Smartphone, color: 'text-blue-600', link: '/tecnologia' },
    { name: 'Casa & Jardim', icon: Home, color: 'text-green-600', link: '/casa-jardim' },
    { name: 'Moda', icon: Shirt, color: 'text-purple-600', link: '/moda' },
    { name: 'Bebês', icon: Baby, color: 'text-pink-600', link: '/bebes' },
    { name: 'Games', icon: Zap, color: 'text-indigo-600', link: '/games' },
    { name: 'Beleza', icon: Sparkles, color: 'text-rose-600', link: '/beleza' }
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Obrigado pelo contato! Entraremos em contato em breve.')
  }

  const handleLinkClick = () => {
    saveCurrentPosition()
  }

  return (
    <div className="min-h-screen">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-7 w-7 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">Meus Descontos Online</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('ofertas')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Ofertas
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
              {/* Link para Admin */}
              <Link 
                href="/admin"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Indicador de Modo Admin */}
      {isAuthenticated && (
        <div className="fixed top-16 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-40">
          Modo Admin Ativo
        </div>
      )}

      {/* Seção Hero com overlay para melhor legibilidade */}
      <section 
        id="inicio" 
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="text-center text-white px-4 max-w-4xl mx-auto relative z-10">
          <EditableText
            id="hero-title"
            content={siteContent['hero-title'] || 'Todos os Melhores Descontos'}
            type="title"
            className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg"
            onSave={updateSiteContent}
            isAdminMode={isAuthenticated}
          />
          <EditableText
            id="hero-subtitle"
            content={siteContent['hero-subtitle'] || 'em um só Lugar'}
            type="title"
            className="text-4xl md:text-6xl font-bold mb-6 block text-yellow-300 drop-shadow-lg"
            onSave={updateSiteContent}
            isAdminMode={isAuthenticated}
          />
          <EditableText
            id="hero-description"
            content={siteContent['hero-description'] || 'Acesso rápido aos melhores links de Mercado Livre, Amazon, Magazine Luiza, Americanas, Shopee e AliExpress.'}
            type="description"
            className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow-md"
            onSave={updateSiteContent}
            isAdminMode={isAuthenticated}
          />
          <button 
            onClick={() => scrollToSection('ofertas')}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Aproveitar Agora
          </button>
        </div>
      </section>

      {/* Seção Categorias com fundo semi-transparente */}
      <section className="py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Categorias Populares
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} onClick={handleLinkClick} className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 hover:bg-white transition-colors shadow-md">
                  <category.icon className={`h-10 w-10 mx-auto mb-3 ${category.color}`} />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {category.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Ofertas com fundo semi-transparente */}
      <section id="ofertas" className="py-16 bg-gray-50/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Marketplaces Parceiros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaces.map((marketplace, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{marketplace.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{marketplace.name}</h4>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {marketplace.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center text-sm">{marketplace.description}</p>
                <Link 
                  href={marketplace.link}
                  onClick={handleLinkClick}
                  className={`block w-full bg-gradient-to-r ${marketplace.color} text-white font-bold py-2 px-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
                >
                  Ver Ofertas
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre com fundo semi-transparente */}
      <section className="py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <EditableText
            id="about-title"
            content={siteContent['about-title'] || 'Por que Escolher Nosso Site?'}
            type="title"
            className="text-3xl font-bold mb-8 text-gray-800"
            onSave={updateSiteContent}
            isAdminMode={isAuthenticated}
          />
          <div className="max-w-3xl mx-auto">
            <EditableText
              id="about-description"
              content={siteContent['about-description'] || 'Organizamos as melhores promoções dos principais marketplaces de forma prática e segura.'}
              type="description"
              className="text-lg text-gray-600 mb-8"
              onSave={updateSiteContent}
              isAdminMode={isAuthenticated}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <Star className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold mb-2 text-gray-800">Ofertas Verificadas</h4>
                <p className="text-gray-600 text-sm">Promoções checadas regularmente</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <ShoppingBag className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold mb-2 text-gray-800">Fácil Navegação</h4>
                <p className="text-gray-600 text-sm">Interface simples e intuitiva</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <Star className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold mb-2 text-gray-800">Sempre Atualizado</h4>
                <p className="text-gray-600 text-sm">Novas ofertas constantemente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato com fundo semi-transparente escuro */}
      <section id="contato" className="py-16 bg-gray-900/95 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Entre em Contato</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formulário */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Envie uma Mensagem</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Mensagem</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Digite sua mensagem aqui..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="space-y-3 mb-6">
                <a href="#" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-3 hover:text-pink-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
              </div>
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-semibold mb-2">Transparência</h5>
                <p className="text-gray-300 text-sm">
                  Este site contém links de afiliados. Ao comprar por eles, você apoia nosso trabalho 
                  sem pagar nada a mais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé com fundo semi-transparente */}
      <footer className="bg-gray-800/95 backdrop-blur-sm text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <ShoppingBag className="h-6 w-6 text-blue-400" />
            <h5 className="text-lg font-bold">Meus Descontos Online</h5>
          </div>
          <p className="text-gray-400 mb-2">
            Encontre as melhores ofertas em um só lugar.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Meus Descontos Online. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}