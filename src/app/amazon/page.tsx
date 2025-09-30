'use client'

import { useState } from 'react'
import { ArrowLeft, ShoppingCart, Star, Search } from 'lucide-react'
import Link from 'next/link'

export default function AmazonAffiliatePage() {
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
      
      {/* Header estilo Amazon */}
      <header className="relative z-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-orange-400">amazon</div>
              <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Pesquisar produtos..."
                  className="px-4 py-2 text-gray-800 w-64 focus:outline-none"
                />
                <button className="bg-orange-400 p-2 hover:bg-orange-500 transition-colors">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
              <ShoppingCart className="h-6 w-6" />
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
              Configure seu Link de Afiliado Amazon
            </h1>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Cole seu link de afiliado da Amazon:
              </label>
              <input
                type="url"
                value={affiliateLink}
                onChange={(e) => setAffiliateLink(e.target.value)}
                placeholder="https://amzn.to/seu-link-de-afiliado"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ir para Amazon
              </button>
            </div>
          </div>

          {/* Simulação da Interface Amazon */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos em Destaque</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Produto 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Produto</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Echo Dot (5ª Geração) | Smart Speaker com Alexa
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(1.234)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">R$ 199,99</div>
                <div className="text-sm text-gray-500 line-through">R$ 299,99</div>
              </div>

              {/* Produto 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Produto</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Fire TV Stick 4K Max | Streaming em 4K Ultra HD
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(856)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">R$ 349,99</div>
                <div className="text-sm text-gray-500 line-through">R$ 449,99</div>
              </div>

              {/* Produto 3 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleRedirect}>
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Produto</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Kindle Paperwhite | À prova d'água, 8 GB
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(2.145)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">R$ 449,99</div>
                <div className="text-sm text-gray-500 line-through">R$ 549,99</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 px-8 rounded-xl hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mais Produtos na Amazon
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}