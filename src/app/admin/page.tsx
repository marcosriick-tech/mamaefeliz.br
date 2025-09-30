'use client'

import { useState, useEffect } from 'react'
import { Lock, Eye, Edit, Save, X, Plus, Trash2, LogOut } from 'lucide-react'

interface EditableContent {
  id: string
  type: 'text' | 'title' | 'description' | 'link'
  content: string
  section: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] = useState<EditableContent[]>([
    // Hero Section
    { id: 'hero-title', type: 'title', content: 'Todos os Melhores Descontos', section: 'Hero' },
    { id: 'hero-subtitle', type: 'title', content: 'em um só Lugar', section: 'Hero' },
    { id: 'hero-description', type: 'description', content: 'Acesso rápido aos melhores links de Mercado Livre, Amazon, Magazine Luiza, Americanas, Shopee e AliExpress.', section: 'Hero' },
    
    // Marketplaces
    { id: 'amazon-name', type: 'text', content: 'Amazon', section: 'Marketplaces' },
    { id: 'amazon-desc', type: 'description', content: 'Milhões de produtos com entrega rápida', section: 'Marketplaces' },
    { id: 'mercadolivre-name', type: 'text', content: 'Mercado Livre', section: 'Marketplaces' },
    { id: 'mercadolivre-desc', type: 'description', content: 'Marketplace líder da América Latina', section: 'Marketplaces' },
    { id: 'magalu-name', type: 'text', content: 'Magazine Luiza', section: 'Marketplaces' },
    { id: 'magalu-desc', type: 'description', content: 'Tecnologia e eletrodomésticos', section: 'Marketplaces' },
    
    // About Section
    { id: 'about-title', type: 'title', content: 'Por que Escolher Nosso Site?', section: 'Sobre' },
    { id: 'about-description', type: 'description', content: 'Organizamos as melhores promoções dos principais marketplaces de forma prática e segura.', section: 'Sobre' },
  ])

  const [tempContent, setTempContent] = useState<EditableContent[]>([])

  // Credenciais simples (em produção, use autenticação mais segura)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  }

  useEffect(() => {
    // Verificar se já está autenticado no localStorage
    const isAuth = localStorage.getItem('adminAuth') === 'true'
    setIsAuthenticated(isAuth)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.username === ADMIN_CREDENTIALS.username && 
        loginData.password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
      setLoginData({ username: '', password: '' })
    } else {
      alert('Credenciais inválidas!')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
    setIsEditing(false)
  }

  const startEditing = () => {
    setIsEditing(true)
    setTempContent([...editableContent])
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setEditableContent([...tempContent])
  }

  const saveChanges = () => {
    setIsEditing(false)
    setTempContent([])
    alert('Alterações salvas com sucesso!')
    // Aqui você salvaria no banco de dados ou localStorage
    localStorage.setItem('siteContent', JSON.stringify(editableContent))
  }

  const updateContent = (id: string, newContent: string) => {
    setEditableContent(prev => 
      prev.map(item => 
        item.id === id ? { ...item, content: newContent } : item
      )
    )
  }

  const addNewContent = () => {
    const newId = `custom-${Date.now()}`
    const newItem: EditableContent = {
      id: newId,
      type: 'text',
      content: 'Novo conteúdo',
      section: 'Personalizado'
    }
    setEditableContent(prev => [...prev, newItem])
  }

  const deleteContent = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este item?')) {
      setEditableContent(prev => prev.filter(item => item.id !== id))
    }
  }

  // Tela de Login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Área Administrativa</h1>
            <p className="text-gray-600">Faça login para gerenciar o site</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Usuário</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Senha</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90"
                placeholder="Digite sua senha"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Entrar
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-gray-50/90 backdrop-blur-sm rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Credenciais de teste:</strong><br />
              Usuário: admin<br />
              Senha: admin123
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Painel de Administração
  return (
    <div className="min-h-screen relative">
      {/* Overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header do Admin */}
        <header className="bg-white/95 backdrop-blur-sm shadow-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Edit className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Painel Administrativo</h1>
                  <p className="text-gray-600 text-sm">Gerencie o conteúdo do seu site</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {!isEditing ? (
                  <button
                    onClick={startEditing}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Editar Site</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={saveChanges}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>Salvar</span>
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancelar</span>
                    </button>
                  </div>
                )}
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="container mx-auto px-4 py-8">
          {/* Status */}
          <div className="mb-8">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
              isEditing 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isEditing ? 'bg-yellow-500' : 'bg-green-500'
              }`}></div>
              <span>{isEditing ? 'Modo de Edição Ativo' : 'Visualizando Conteúdo'}</span>
            </div>
          </div>

          {/* Ações Rápidas */}
          {isEditing && (
            <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Ações Rápidas</h2>
              <div className="flex space-x-4">
                <button
                  onClick={addNewContent}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Adicionar Conteúdo</span>
                </button>
              </div>
            </div>
          )}

          {/* Lista de Conteúdo Editável */}
          <div className="space-y-6">
            {Object.entries(
              editableContent.reduce((acc, item) => {
                if (!acc[item.section]) acc[item.section] = []
                acc[item.section].push(item)
                return acc
              }, {} as Record<string, EditableContent[]>)
            ).map(([section, items]) => (
              <div key={section} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                  Seção: {section}
                </h2>
                
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white/90">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.type === 'title' ? 'bg-purple-100 text-purple-800' :
                            item.type === 'description' ? 'bg-blue-100 text-blue-800' :
                            item.type === 'link' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.type}
                          </span>
                          <span className="text-sm text-gray-600">ID: {item.id}</span>
                        </div>
                        
                        {isEditing && (
                          <button
                            onClick={() => deleteContent(item.id)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      {isEditing ? (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Conteúdo:
                          </label>
                          {item.type === 'description' ? (
                            <textarea
                              value={item.content}
                              onChange={(e) => updateContent(item.id, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                              rows={3}
                            />
                          ) : (
                            <input
                              type="text"
                              value={item.content}
                              onChange={(e) => updateContent(item.id, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            />
                          )}
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded p-3">
                          <p className={`${
                            item.type === 'title' ? 'font-bold text-lg' :
                            item.type === 'description' ? 'text-gray-700' :
                            'text-gray-800'
                          }`}>
                            {item.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Preview do Site */}
          <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Preview do Site</h2>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>Ver Site</span>
              </a>
            </div>
            <p className="text-gray-600">
              Clique em "Ver Site" para visualizar as alterações em uma nova aba.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}