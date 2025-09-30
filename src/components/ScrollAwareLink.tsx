'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ScrollAwareLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function ScrollAwareLink({ href, children, className, onClick }: ScrollAwareLinkProps) {
  const { saveCurrentPosition } = useScrollPosition()

  const handleClick = () => {
    saveCurrentPosition()
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}