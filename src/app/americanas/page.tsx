'use client'

import { useState } from 'react'
import { ArrowLeft, Search, ShoppingCart, Percent } from 'lucide-react'
import Link from 'next/link'

export default function AmericanasAffiliatePage() {
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
      
      {/* Header estilo Americanas */}
      <header className="relative z-10 bg-red-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">Americanas</div>
              <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="O que você está procurando?"
                  className="px-4 py-2 text-gray-800 w-64 focus:outline-none"
                />
                <button className="bg-red-500 p-2 hover:bg-red-600 transition-colors">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
              <ShoppingCart className="h-6 w-6 text-white" />
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
              Configure seu Link de Afiliado Americanas
            </h1>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Cole seu link de afiliado das Americanas:
              </label>
              <input
                type="url"
                value={affiliateLink}
                onChange={(e) => setAffiliateLink(e.target.value)}
                placeholder="https://americanas.com.br/seu-link-de-afiliado"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ir para Americanas
              </button>
            </div>
          </div>

          {/* Simulação da Interface Americanas */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Percent className="h-6 w-6 text-red-500 mr-2" />
              Super Ofertas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Produto 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    50% OFF
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Console PlayStation 5 825GB SSD
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 4.999,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">50% OFF</div>
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">R$ 2.499,90</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 208,33 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Entrega expressa disponível</div>
              </div>

              {/* Produto 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    35% OFF
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Smart TV 65" 4K Samsung QLED
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 3.999,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">35% OFF</div>
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">R$ 2.599,90</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 216,66 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Entrega expressa disponível</div>
              </div>

              {/* Produto 3 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    45% OFF
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Ar Condicionado Split 12000 BTUs Inverter
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 1.999,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">45% OFF</div>
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">R$ 1.099,90</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 91,66 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Entrega expressa disponível</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-8 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mais Ofertas nas Americanas
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}