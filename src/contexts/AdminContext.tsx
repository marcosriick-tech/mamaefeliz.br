'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AdminContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
  siteContent: Record<string, string>
  updateSiteContent: (key: string, value: string) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [siteContent, setSiteContent] = useState<Record<string, string>>({
    'hero-title': 'Todos os Melhores Descontos',
    'hero-subtitle': 'em um só Lugar',
    'hero-description': 'Acesso rápido aos melhores links de Mercado Livre, Amazon, Magazine Luiza, Americanas, Shopee e AliExpress.',
    'about-title': 'Por que Escolher Nosso Site?',
    'about-description': 'Organizamos as melhores promoções dos principais marketplaces de forma prática e segura.',
  })

  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  }

  useEffect(() => {
    // Carregar autenticação do localStorage
    const isAuth = localStorage.getItem('adminAuth') === 'true'
    setIsAuthenticated(isAuth)

    // Carregar conteúdo salvo do localStorage
    const savedContent = localStorage.getItem('siteContent')
    if (savedContent) {
      try {
        setSiteContent(JSON.parse(savedContent))
      } catch (error) {
        console.error('Erro ao carregar conteúdo salvo:', error)
      }
    }
  }, [])

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
  }

  const updateSiteContent = (key: string, value: string) => {
    const newContent = { ...siteContent, [key]: value }
    setSiteContent(newContent)
    localStorage.setItem('siteContent', JSON.stringify(newContent))
  }

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      siteContent,
      updateSiteContent
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin deve ser usado dentro de um AdminProvider')
  }
  return context
}