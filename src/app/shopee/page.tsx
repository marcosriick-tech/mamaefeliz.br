'use client'

import { useState } from 'react'
import { ArrowLeft, Search, ShoppingCart, Gift } from 'lucide-react'
import Link from 'next/link'

export default function ShopeeAffiliatePage() {
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
      
      {/* Header estilo Shopee */}
      <header className="relative z-10 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">Shopee</div>
              <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Buscar na Shopee..."
                  className="px-4 py-2 text-gray-800 w-64 focus:outline-none"
                />
                <button className="bg-orange-500 p-2 hover:bg-orange-600 transition-colors">
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
              Configure seu Link de Afiliado Shopee
            </h1>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Cole seu link de afiliado da Shopee:
              </label>
              <input
                type="url"
                value={affiliateLink}
                onChange={(e) => setAffiliateLink(e.target.value)}
                placeholder="https://shopee.com.br/seu-link-de-afiliado"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ir para Shopee
              </button>
            </div>
          </div>

          {/* Simulação da Interface Shopee */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Gift className="h-6 w-6 text-orange-500 mr-2" />
              Flash Sale
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Produto 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -70%
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    FLASH
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Fone de Ouvido Bluetooth Sem Fio TWS
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 199,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">70% OFF</div>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">R$ 59,90</div>
                <div className="text-sm text-gray-600 mb-2">Frete grátis</div>
                <div className="text-xs text-orange-600 font-medium">⚡ Restam apenas 12h</div>
                <div className="text-xs text-gray-500 mt-1">Vendido: 1.2k</div>
              </div>

              {/* Produto 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -85%
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    FLASH
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Smartwatch Relógio Inteligente Fitness
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 399,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">85% OFF</div>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">R$ 59,90</div>
                <div className="text-sm text-gray-600 mb-2">Frete grátis</div>
                <div className="text-xs text-orange-600 font-medium">⚡ Restam apenas 8h</div>
                <div className="text-xs text-gray-500 mt-1">Vendido: 856</div>
              </div>

              {/* Produto 3 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -90%
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    FLASH
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Kit 10 Capinhas para Celular Transparente
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-gray-500 line-through">R$ 99,90</div>
                  <div className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded text-xs">90% OFF</div>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">R$ 9,90</div>
                <div className="text-sm text-gray-600 mb-2">Frete grátis</div>
                <div className="text-xs text-orange-600 font-medium">⚡ Restam apenas 6h</div>
                <div className="text-xs text-gray-500 mt-1">Vendido: 2.3k</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mais Ofertas na Shopee
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}