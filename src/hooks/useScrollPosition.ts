'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useScrollPosition() {
  const router = useRouter()

  useEffect(() => {
    // Salvar posição de scroll antes de navegar
    const saveScrollPosition = () => {
      const scrollPosition = window.scrollY
      const currentPath = window.location.pathname
      sessionStorage.setItem(`scroll-${currentPath}`, scrollPosition.toString())
    }

    // Restaurar posição de scroll ao carregar a página
    const restoreScrollPosition = () => {
      const currentPath = window.location.pathname
      const savedPosition = sessionStorage.getItem(`scroll-${currentPath}`)
      
      if (savedPosition) {
        // Usar setTimeout para garantir que o DOM esteja totalmente carregado
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition))
        }, 100)
      }
    }

    // Interceptar cliques em links para salvar posição
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        saveScrollPosition()
      }
    }

    // Salvar posição antes de sair da página
    const handleBeforeUnload = () => {
      saveScrollPosition()
    }

    // Restaurar posição ao carregar
    restoreScrollPosition()

    // Adicionar event listeners
    document.addEventListener('click', handleLinkClick)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // Função para salvar posição manualmente
  const saveCurrentPosition = () => {
    const scrollPosition = window.scrollY
    const currentPath = window.location.pathname
    sessionStorage.setItem(`scroll-${currentPath}`, scrollPosition.toString())
  }

  return { saveCurrentPosition }
}