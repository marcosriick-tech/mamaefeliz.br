'use client'

import { useState } from 'react'
import { ArrowLeft, Search, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function MercadoLivreAffiliatePage() {
  const [affiliateLink, setAffiliateLink] = useState('')

  const backgroundStyle = {
    backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c84540d1-f875-4b7d-93ca-e89718df35ca.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }

  const handleRedirect = () => {
    if (affiliateLink) {
      window.open(affiliateLink, '_blank')
    } else {
      alert('Por favor, insira seu link de afiliado primeiro!')
    }
  }

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Header estilo Mercado Livre */}
      <header className="relative z-10 bg-yellow-400">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600">Mercado Livre</div>
              <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden shadow-md">
                <input 
                  type="text" 
                  placeholder="Buscar produtos, marcas e muito mais..."
                  className="px-4 py-2 text-gray-800 w-80 focus:outline-none"
                />
                <button className="bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <ShoppingCart className="h-6 w-6 text-gray-800" />
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Configuração do Link de Afiliado */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Configure seu Link de Afiliado Mercado Livre
            </h1>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Cole seu link de afiliado do Mercado Livre:
              </label>
              <input
                type="url"
                value={affiliateLink}
                onChange={(e) => setAffiliateLink(e.target.value)}
                placeholder="https://mercadolivre.com/seu-link-de-afiliado"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ir para Mercado Livre
              </button>
            </div>
          </div>

          {/* Simulação da Interface Mercado Livre */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas do Dia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Produto 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <Heart className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Smartphone Samsung Galaxy A54 128GB
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-1">R$ 1.299</div>
                <div className="text-sm text-gray-500 line-through mb-2">R$ 1.599</div>
                <div className="text-sm text-green-600 font-medium mb-2">18% OFF</div>
                <div className="text-sm text-gray-600">em 12x R$ 108,25 sem juros</div>
                <div className="text-xs text-green-600 mt-1">Frete grátis</div>
              </div>

              {/* Produto 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <Heart className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Notebook Lenovo IdeaPad 3i Intel Core i5
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-1">R$ 2.499</div>
                <div className="text-sm text-gray-500 line-through mb-2">R$ 2.999</div>
                <div className="text-sm text-green-600 font-medium mb-2">17% OFF</div>
                <div className="text-sm text-gray-600">em 12x R$ 208,25 sem juros</div>
                <div className="text-xs text-green-600 mt-1">Frete grátis</div>
              </div>

              {/* Produto 3 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <Heart className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Smart TV 55" 4K UHD Samsung Crystal
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-1">R$ 1.899</div>
                <div className="text-sm text-gray-500 line-through mb-2">R$ 2.299</div>
                <div className="text-sm text-green-600 font-medium mb-2">17% OFF</div>
                <div className="text-sm text-gray-600">em 12x R$ 158,25 sem juros</div>
                <div className="text-xs text-green-600 mt-1">Frete grátis</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-bold py-3 px-8 rounded-xl hover:from-yellow-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mais Ofertas no Mercado Livre
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}