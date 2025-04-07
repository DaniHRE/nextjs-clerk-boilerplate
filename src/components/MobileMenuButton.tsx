'use client'

import { List } from '@phosphor-icons/react'
import { useMobileSidebar } from '@/contexts/MobileSidebarContext'

export default function MobileMenuButton() {
  const { openSidebar } = useMobileSidebar()

  return (
    <button
      onClick={openSidebar}
      className="md:hidden p-2 text-gray-700 dark:text-white hover:text-blue-600 transition"
      aria-label="Abrir menu"
    >
      <List size={28} weight="bold" />
    </button>
  )
}
