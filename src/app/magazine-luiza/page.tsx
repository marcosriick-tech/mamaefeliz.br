'use client'

import { useState } from 'react'
import { ArrowLeft, Search, ShoppingCart, Zap } from 'lucide-react'
import Link from 'next/link'

export default function MagazineLuizaAffiliatePage() {
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
      
      {/* Header estilo Magazine Luiza */}
      <header className="relative z-10 bg-blue-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">Magazine <span className="text-pink-300">Luiza</span></div>
              <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Busque aqui seu produto..."
                  className="px-4 py-2 text-gray-800 w-64 focus:outline-none"
                />
                <button className="bg-pink-500 p-2 hover:bg-pink-600 transition-colors">
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
              Configure seu Link de Afiliado Magazine Luiza
            </h1>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Cole seu link de afiliado da Magazine Luiza:
              </label>
              <input
                type="url"
                value={affiliateLink}
                onChange={(e) => setAffiliateLink(e.target.value)}
                placeholder="https://magazineluiza.com.br/seu-link-de-afiliado"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ir para Magazine Luiza
              </button>
            </div>
          </div>

          {/* Simulação da Interface Magazine Luiza */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Zap className="h-6 w-6 text-yellow-500 mr-2" />
              Ofertas Relâmpago
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Produto 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -25%
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  iPhone 15 128GB Apple
                </h3>
                <div className="text-sm text-gray-500 line-through mb-1">R$ 7.999,00</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">R$ 5.999,00</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 499,92 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Frete GRÁTIS</div>
                <div className="text-xs text-pink-500 mt-1">⚡ Oferta por tempo limitado</div>
              </div>

              {/* Produto 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -30%
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Geladeira Brastemp Frost Free 375L
                </h3>
                <div className="text-sm text-gray-500 line-through mb-1">R$ 2.499,00</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">R$ 1.749,00</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 145,75 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Frete GRÁTIS</div>
                <div className="text-xs text-pink-500 mt-1">⚡ Oferta por tempo limitado</div>
              </div>

              {/* Produto 3 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="relative">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Produto</span>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -40%
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Notebook Gamer Acer Nitro 5 RTX 3050
                </h3>
                <div className="text-sm text-gray-500 line-through mb-1">R$ 4.999,00</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">R$ 2.999,00</div>
                <div className="text-sm text-gray-600 mb-2">em 12x de R$ 249,92 sem juros</div>
                <div className="text-xs text-green-600 font-medium">Frete GRÁTIS</div>
                <div className="text-xs text-pink-500 mt-1">⚡ Oferta por tempo limitado</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mais Ofertas na Magazine Luiza
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}