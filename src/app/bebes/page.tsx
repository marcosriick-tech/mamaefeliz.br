'use client'

import { useState } from 'react'
import { Baby, ArrowLeft, ExternalLink, Edit3 } from 'lucide-react'
import Link from 'next/link'

export default function BebesPage() {
  const [affiliateLink, setAffiliateLink] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const backgroundStyle = {
    backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c84540d1-f875-4b7d-93ca-e89718df35ca.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }

  const handleSaveLink = () => {
    setIsEditing(false)
    alert('Link de afiliado salvo com sucesso!')
  }

  const handleRedirect = () => {
    if (affiliateLink) {
      window.open(affiliateLink, '_blank')
    } else {
      alert('Configure seu link de afiliado primeiro!')
    }
  }

  const products = [
    {
      name: 'Carrinho de Bebê 3 em 1',
      price: 'R$ 599,99',
      originalPrice: 'R$ 899,99',
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=300&h=300&fit=crop'
    },
    {
      name: 'Berço Portátil com Mosquiteiro',
      price: 'R$ 299,99',
      originalPrice: 'R$ 449,99',
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop'
    },
    {
      name: 'Kit Roupinhas Recém-Nascido',
      price: 'R$ 89,99',
      originalPrice: 'R$ 149,99',
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&h=300&fit=crop'
    },
    {
      name: 'Cadeirinha para Auto',
      price: 'R$ 399,99',
      originalPrice: 'R$ 599,99',
      discount: '33% OFF',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
    },
    {
      name: 'Monitor de Bebê com Câmera',
      price: 'R$ 249,99',
      originalPrice: 'R$ 399,99',
      discount: '38% OFF',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop'
    },
    {
      name: 'Kit Higiene Completo',
      price: 'R$ 79,99',
      originalPrice: 'R$ 129,99',
      discount: '38% OFF',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="font-medium">Voltar</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Baby className="h-8 w-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-800">Bebês</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Configuração do Link de Afiliado */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Configurar Link de Afiliado</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
                <span>{isEditing ? 'Cancelar' : 'Editar'}</span>
              </button>
            </div>
            
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Seu Link de Afiliado para Bebês
                  </label>
                  <input
                    type="url"
                    value={affiliateLink}
                    onChange={(e) => setAffiliateLink(e.target.value)}
                    placeholder="https://seu-link-de-afiliado.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  onClick={handleSaveLink}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
                >
                  Salvar Link
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  {affiliateLink ? (
                    <span className="text-green-600 font-medium">✓ Link configurado</span>
                  ) : (
                    'Nenhum link configurado ainda'
                  )}
                </p>
                {affiliateLink && (
                  <button
                    onClick={handleRedirect}
                    className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ir para Ofertas</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Ofertas Imperdíveis para Bebês
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <button
                    onClick={handleRedirect}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Oferta
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações da Categoria */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto text-center">
            <Baby className="h-16 w-16 text-pink-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Bebês</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tudo o que seu bebê precisa com os melhores preços e qualidade garantida. 
              Carrinhos, berços, roupinhas, brinquedos educativos, produtos de higiene e muito mais. 
              Cuidar do seu pequeno nunca foi tão econômico.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}